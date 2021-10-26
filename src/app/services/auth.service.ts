import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(
    private _http: HttpClient
  ){ }

  login( username:string, password:string ){

    let data = {
      username,
      password
    }

    return this._http.post( 'https://tienda.cibania.com/wp-json/jwt-auth/v1/token', data ).pipe(
      map( resp => {
        this.setUser( resp )
        return resp
      })
    )

  }

  logout(){
    localStorage.removeItem('user')
  }

  private setUser( user:any ){

    this.token = user.token;
    localStorage.setItem( 'user', JSON.stringify( user ) )

  }

  getUser(){

    let user = JSON.parse( localStorage.getItem( 'user' ) || '{}' )

    return user;
  }

  isLogged():boolean{

    if( localStorage.getItem('user') ){
      return true
    }else{
      return false
    }
  }
}
