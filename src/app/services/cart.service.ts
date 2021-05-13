import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICart } from '../models';
import { endpoints } from './endpoints';

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(private http: HttpClient) {}

  getCartItem = async () => {
    const response = await this.http.get(`${endpoints.GET_CART_ITEMS}`).toPromise() as ICart;
    return response;
  }

}
