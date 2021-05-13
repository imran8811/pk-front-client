import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IUserData, IUserLogin } from 'src/app/models';
import { AuthService } from "../../../../services/auth.service";
import { appRoutes } from '../../../../services/app-routes';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  invalidCredentials: boolean = false;

  loginForm = this.fb.group({
    email : ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  })

  get form() { return this.loginForm.controls; }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {}

  login = async() => {
    if(this.loginForm.invalid){
      return;
    }
    const data = {
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    }
    const response = await this.authService.userLogin(data) as IUserLogin;
    if(response.type === 'success'){
      if(localStorage.getItem('NEXT_PATH')) {
        this.router.navigate([localStorage.getItem('NEXT_PATH')]);
        localStorage.removeItem('NEXT_PATH');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('fullName', response.data.fullName);
      } else {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('fullName', response.data.fullName);
        this.router.navigate([appRoutes.WHOLESALE_SHOP]);
      }
    } else if(response.type === 'error') {
      this.invalidCredentials = true;
    }
  }

}
