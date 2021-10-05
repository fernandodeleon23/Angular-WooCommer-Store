import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dataService: DataService
  ){
    this.product_slug = this.route.snapshot.paramMap.get('product_slug');
    
    this._dataService.getProduct( this.product_slug ).subscribe(data=>{
      this.product = data
      this.loading = false
    })
  }

  ngOnInit(): void {
  }

}
