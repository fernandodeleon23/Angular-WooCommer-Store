import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any;
  product_slug: any;
  loading: boolean = true;
  relatedProducts: any;
  addedToCart: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataService: DataService,
    private CartService: CartService
  ){
    this.product_slug = this.route.snapshot.paramMap.get('product_slug');

    this.loadProduct( this.product_slug )
  }

  ngOnInit(): void {
  }

  loadProduct( slug:string ){
    this._dataService.getProduct( slug ).subscribe(data=>{
      this.product = data
      this.loading = false
      this.loadRelated( this.product )
    })
  }

  loadRelated( product:any ){
    this._dataService.getRelatedProducts( product[0].id ).subscribe(data=>{
      this.relatedProducts = data;
    })
  }

  goToProduct( slug:string ){
    this.router.navigate(['/product', slug])
    this.loadProduct( slug )
  }

  addToCart(){
    if( this.CartService.addProduct( this.product ) ){
      this.addedToCart = true;
    }
  }

}
