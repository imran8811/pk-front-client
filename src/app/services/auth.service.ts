import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IGeneralResponse, IUserLogin, IUserSignup } from '../models';
import { endpoints } from './endpoints';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  userLogin = async (data) => {
    const response = await this.http.post(`${endpoints.USER_LOGIN}`, data).toPromise() as IUserLogin;
    return response;
  }

  userSignup = async (data: IUserSignup) => {
    const response = await this.http.post(`${endpoints.USER_REGISTER}`, data).toPromise() as IUserSignup;
    return response;
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if(loggedIn === 'true') {
      return true;
    } else {
      return false;
    }
  }

  userLogout = async() => {
    const token = localStorage.getItem('token');
    const res = await this.http.post(`${endpoints.USER_LOGOUT}`, token).toPromise() as IGeneralResponse;
    res.type === 'success'? true : false;
  }
}
