import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;

  constructor(
    private CartService: CartService
  ){
    this.cart = this.CartService.getCart()
  }

  ngOnInit(): void {
  }

  emptyCart(){
    this.CartService.emptyCart()
    this.cart = ''
  }

}
