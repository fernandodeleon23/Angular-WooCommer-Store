import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apiUrl:string = 'http://localhost:3000/';

  constructor( private _http: HttpClient ) { }

  getProducts(){
    return this._http.get( this.apiUrl+'products')
  }

  getProduct( slug:string ){
    return this._http.get( this.apiUrl+'products/'+slug)
  }

  getProductsByCat( slug:string ){
    return this._http.get( this.apiUrl+'products/cat/'+slug )
  }
}
