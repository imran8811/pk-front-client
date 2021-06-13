import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appRoutes } from 'src/app/services/app-routes';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { IGeneralResponse, IUserSignup } from '../../../../models'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  get form() { return this.signUpForm.controls; }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      fullName : ['', Validators.required],
      businessName : ['', Validators.required],
      userEmail : ['', Validators.required],
      userPassword : ['', Validators.required]
    })
  }

  userSignup = async() => {
    const data = this.signUpForm.value;
    const res = await this.authService.userSignup(data) as IUserSignup;
    if(res.type === 'success') {
      this.router.navigate(['/']);
    }
  }
}
