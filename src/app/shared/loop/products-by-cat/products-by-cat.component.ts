import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-by-cat',
  templateUrl: './products-by-cat.component.html',
  styleUrls: ['./products-by-cat.component.css']
})
export class ProductsByCatComponent implements OnInit {

  @Input('cat-title') catTitle: string | undefined;
  @Input('cat-slug') catSlug: string | undefined;

  products:any;
  loading:boolean = true;

  constructor(
    private _dataService: DataService
  ) {

  }

  ngOnInit(): void {

    if( this.catSlug ){
      this._dataService.getProductsByCat( this.catSlug ).subscribe(data=>{
        this.products = data
        this.loading = false;
      })
    }
  }

}
