import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../../services/product.service'
import { Product, IProduct } from '../../../../models/product.model'

@Component({
  selector: 'men-listing',
  templateUrl: './men-listing.component.html',
})

export class MenListingComponent implements OnInit {
  getAllProducts:any = [];
  currentDept:string ='';
  currentCategory:string = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts = async() => {
    const res = await this.productService.getProducts() as IProduct;
    this.getAllProducts = res;
    this.currentDept = `${res[0].department==='Men'? 'men' : ''}`;
    this.currentCategory = `${res[0].category==='jeansPant'? 'jeans-pant' : ''}`;
  }

}
