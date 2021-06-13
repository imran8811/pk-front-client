import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewOrder } from '../models';
import { endpoints } from './endpoints';

@Injectable({providedIn: 'root'})
export class OrderService {

  constructor(private http: HttpClient) {}

  createNewOrder = async (data) => {
    const response = await this.http.post(`${endpoints.ADD_NEW_ORDER}`, data).toPromise() as INewOrder;
    return response;
  }

}
