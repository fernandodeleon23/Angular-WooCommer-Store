import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: any;
  categoryData:any;
  loading:boolean = true;

  constructor(
    private _dataService: DataService,
    private _aRoute: ActivatedRoute
  ){
    this._dataService.getProducts().subscribe(data=>{
      this.products = data
      this.loading = false
    })
  }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
