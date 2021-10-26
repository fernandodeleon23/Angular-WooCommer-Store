import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any = []
  constructor() { }

  getCart(){

    return this.cart
  }

  addProduct( product:any ){

    let cart = JSON.parse( localStorage.getItem('cart') || '{}' )
    let newCart = []
    
    if( cart.length > 0 ){

      // Si existe
      if( this.existItem( product[0] ) ){
        this.getItemIndex( product[0].id )
      }else{

        let theProduct = {
          id:0,
          name: '',
          slug:'',
          image:'',
          quantity: 0,
          price:0
        }
      
        theProduct.id = product[0].id
        theProduct.name = product[0].name
        theProduct.slug = product[0].slug,
        theProduct.image = product[0].images[0].src
        theProduct.quantity = 1
        theProduct.price = product[0].price

        let newCart = JSON.parse( localStorage.getItem('cart') || '{}' )
        newCart.push( theProduct )

        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify( newCart ) )

      }
      
    }else{

      let theProduct = {
        id:0,
        name: '',
        slug:'',
        image:'',
        quantity: 0,
        price:0
      }
    
      theProduct.id = product[0].id
      theProduct.name = product[0].name
      theProduct.slug = product[0].slug,
      theProduct.image = product[0].images[0].src
      theProduct.quantity = 1
      theProduct.price = product[0].price
    
      newCart.push( theProduct )
      localStorage.setItem('cart', JSON.stringify( newCart ) )

      console.log('se agregó al carrito')
    }

    return true
  }

  find(needle:any, haystack:any) {
    var results = [];
    var idx = haystack.indexOf(needle);
    while (idx != -1) {
        results.push(idx);
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
  }

  emptyCart(){
    localStorage.removeItem('cart')
  }

  // Functions

  existItem( product:any ){

    this.cart.forEach( (element:any) => {
      if( product.id == element.id ){
        //console.log( 'existe' )
        return true
      }else{
        //console.log( 'no existe' )
        return false
      }
    });

    return true

  }

  getItemIndex( id:number ){

    let cart = JSON.parse( localStorage.getItem('cart') || '{}' )
    let elCount = 0

    cart.forEach( (element:any) => {
      if( element.id == id ){
        
        let newItem = {
          id:0,
          name: '',
          slug:'',
          image:'',
          quantity: 0,
          price:0
        }
      
        newItem.id = element.id
        newItem.name = element.name
        newItem.slug = element.slug,
        newItem.image = element.image
        newItem.quantity = cart[elCount].quantity+1
        newItem.price = element.price

        cart.push( newItem )
        cart.splice( elCount, 1 )
        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify( cart ) )

        console.log( 'existe el '+elCount )
        elCount++
      }
    });

  }
}
