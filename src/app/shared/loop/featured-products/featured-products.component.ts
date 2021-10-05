import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  products:any;
  loading: boolean = true;

  constructor(
    private _dataService: DataService
  ){
    this._dataService.getProducts().subscribe(data=>{
      this.products = data
      this.loading = false;
    })
  }

  ngOnInit(): void {
  }

}
