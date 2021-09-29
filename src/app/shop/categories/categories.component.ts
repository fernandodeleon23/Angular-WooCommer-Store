import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  products: any;

  constructor(
    private _dataService: DataService
  ){
    this._dataService.getProducts().subscribe(data=>{
      this.products = data
    })
  }

  ngOnInit(): void {
  }

}
