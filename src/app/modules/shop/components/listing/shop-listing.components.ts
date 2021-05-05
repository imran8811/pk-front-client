import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../../services/product.service'
import { Product, IProduct } from '../../../../models/product.model'

@Component({
  selector: 'samples-listing',
  templateUrl: './shop-listing.component.html',
})

export class ShopListingComponent implements OnInit {

  defaultDept:string = 'Men';
  defaultCat:string = 'jeansPant';
  defaultProducts:any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts = async() => {
    const res = await this.productService.getProducts(this.defaultDept, this.defaultCat) as IProduct;
    this.defaultProducts = res;
  }

}
