import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel()
  error:boolean = false;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login( f:NgForm ){

    if( f.invalid ){
      return
    }

    this._authService.login( this.user.username, this.user.password ).subscribe(data=>{
      this.router.navigateByUrl('/cuenta')
    },error=>{
      this.error = true
    })
  }

}
