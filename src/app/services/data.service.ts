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
    return this._http.get( this.apiUrl+'product/'+slug)
  }

  getProductsByCat( slug:string ){
    return this._http.get( this.apiUrl+'products/category-slug/'+slug )
  }

  getRelatedProducts( id:number ){
    return this._http.get( this.apiUrl+'products/related/'+id )
  }

  // Customers
  getCustomer( id:number ){
    return this._http.get( this.apiUrl+'customers/'+id );
  }
}
