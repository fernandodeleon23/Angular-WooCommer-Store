import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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
    private _dataService: DataService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadCustomer()
  }

  loadCustomer(){

    const user = this._authService.getUser()    
    
    this._dataService.getCustomer( user.user_id ).subscribe(data=>{
      this.customer = data
      this.loading = false;
    })
  }

}
