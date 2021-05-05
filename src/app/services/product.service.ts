import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from '../models/product.model';
import { apiRoutes } from './api-routes';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts = async (department:string, category:string) => {
    const response = await this.http.get(`${apiRoutes.GET_PRODUCTS}?dept=${department}&cat=${category}`).toPromise() as IProduct;
    return response;
  }

  getProductByID = async (id:string | null) => {
    const response = await this.http.get(`${apiRoutes.GET_PRODUCTS}/${id}`).toPromise() as IProduct;
    return response;
  }

  addToCart = async (data) => {
    const response = await this.http.post(`${apiRoutes.ADD_TO_CART}`, data).toPromise();
    return response;
  }

}
