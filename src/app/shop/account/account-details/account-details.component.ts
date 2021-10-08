import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  customer:any;
  loading:boolean = true;

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.loadCustomer()
  }

  loadCustomer(){
    this._dataService.getCustomer( 1069 ).subscribe(data=>{
      this.customer = data
      this.loading = false;
    })
  }

}
