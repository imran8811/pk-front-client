import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICart } from '../models';
import { apiRoutes } from './api-routes';

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(private http: HttpClient) {}

  getCartItem = async () => {
    const response = await this.http.get(`${apiRoutes.GET_CART_ITEMS}`).toPromise() as ICart;
    return response;
  }

}
