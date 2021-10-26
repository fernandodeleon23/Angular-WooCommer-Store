import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private Router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.AuthService.logout()
    this.Router.navigateByUrl('/login')
  }

}
