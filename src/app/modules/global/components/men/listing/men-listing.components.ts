import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product, IProduct } from 'src/app/models/product.model'
import { appRoutes } from 'src/app/services/app-routes';
import { PRODUCT_CATEGORIES, PRODUCT_DEPTS, USER_SYNTAX, URL_SYNTAX } from 'src/app/constants';

@Component({
  selector: 'men-listing',
  templateUrl: './men-listing.component.html',
})

export class MenListingComponent implements OnInit {
  getAllProducts:any = [];
  currentDept:string = URL_SYNTAX.MEN;
  currentCategory:string = URL_SYNTAX.JEANS_PANTS;
  SERVER_BASE_PATH = appRoutes.SERVER_BASE_PATH;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts = async() => {
    const res = await this.productService.getProducts() as IProduct;
    this.getAllProducts = res;
  }

}
