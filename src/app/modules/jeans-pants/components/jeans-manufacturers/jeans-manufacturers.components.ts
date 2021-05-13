import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { PRODUCT_CATEGORIES, PRODUCT_DEPTS, USER_SYNTAX, URL_SYNTAX } from '../../../../constants';

@Component({
  selector: 'jeans-manufacturers',
  templateUrl: './jeans-manufacturers.component.html'
})

export class JeansManufacturersComponent implements OnInit {
  currentCategory:string = PRODUCT_CATEGORIES.JEANS_PANTS;
  currentDept = PRODUCT_DEPTS.MEN;
  currentProducts:any = [];
  userCategory:string = USER_SYNTAX.JEANS_PANTS;
  urlDept:string = URL_SYNTAX.MEN;
  urlCategory:string = URL_SYNTAX.JEANS_PANTS;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductByDeptCategory()
  }

  getProductByDeptCategory() {
    this.productService.getProductsByCategoryDept(this.currentDept, this.currentCategory).subscribe((res) => {
      this.currentProducts = res;
      console.log(this.currentProducts);
    })
  }
}
