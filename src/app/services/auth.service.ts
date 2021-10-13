import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ){ }

  login( username:string, password:string ){

    let data = {
      username,
      password
    }

    return this._http.post( 'https://tienda.cibania.com/wp-json/jwt-auth/v1/token', data );

  }

  setUser( user:any ){

    localStorage.setItem( 'user', JSON.stringify( user ) )

  }

  getUserID(){

    let user = JSON.parse( localStorage.getItem( 'user' ) || '{}' )

    return user;
  }
}
