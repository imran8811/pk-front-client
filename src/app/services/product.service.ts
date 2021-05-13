import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from '../models/product.model';
import { endpoints } from './endpoints';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts = async () => {
    const response = await this.http.get(`${endpoints.GET_ALL_PRODUCTS}`).toPromise() as IProduct;
    return response;
  }

  getProductByID = async (id:string | null) => {
    const response = await this.http.get(`${endpoints.GET_PRODUCT}/${id}`).toPromise() as IProduct;
    return response;
  }

  getProductsByCategoryDept = (dept, category) => {
    const response = this.http.get(`${endpoints.GET_ALL_PRODUCTS}?department=${dept}&category=${category}`);
    return response;
  }

  addToCart = async (data) => {
    const response = await this.http.post(`${endpoints.ADD_TO_CART}`, data).toPromise();
    return response;
  }

}
