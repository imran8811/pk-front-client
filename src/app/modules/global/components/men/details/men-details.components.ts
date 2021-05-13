import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormArrayName, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

import { IProduct, IGeneralResponse } from 'src/app/models';
import { ProductService } from '../../../../services/product.service'
import { MEN_PANT_SIZES } from '../../../../constants';
import { AuthService } from 'src/app/services/auth.service';
import { makeWordURLFriendly } from '../../../../utilities';
import { endpoints } from '../../../../services/endpoints'
import { appRoutes } from '../../../../services/app-routes'
import { NotifierService, NotifierOptions } from 'angular-notifier';

@Component({
  selector: 'men-details',
  templateUrl: './men-details.component.html',
})

export class ShopDetailsComponent implements OnInit {
  orderForm: FormGroup;
  private readonly notifier: NotifierService;

  readonly MEN_PANT_SIZES = MEN_PANT_SIZES;

  productDetails:any = [];
  productId:string | null = '';
  orderType = 'regularOrder';
  styleNo:string = '';

  get form() { return this.orderForm.controls }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authservice: AuthService,
    private router : Router,
    notifierService: NotifierService
    ) {
      this.notifier = notifierService
    }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getDetails();
    this.orderForm = this.fb.group({
      orderType : ['regularOrder', Validators.required],
      sizes : this.fb.array([
        this.fb.control('')
      ]),
      quantity : this.fb.array([
        this.fb.control('', Validators.required)
      ])
    })
  }

  addSizesQuantity(){
    this.sizes.push(this.fb.control(''));
    this.quantity.push(this.fb.control(''));
  }

  get sizes() { return this.orderForm.get('sizes') as FormArray }
  get quantity() { return this.orderForm.get('quantity') as FormArray }

  getDetails = async () => {
    const res = await this.productService.getProductByID(this.productId) as IProduct;
    this.productDetails.push(res);
    this.styleNo = res.styleNo;
  }

  addToCart = async() =>{
    const isLoggedIn = this.authservice.isLoggedIn();
    if(isLoggedIn) {
      const data  = {
        productId : this.productId,
        styleNo : this.styleNo,
        orderType : this.orderType,
        sizes : this.form.sizes.value,
        quantity : this.form.quantity.value
      }
      const res = await this.productService.addToCart(data) as IGeneralResponse;
      if(res.type === 'success') {
        localStorage.setItem('CART_ITEM', 'true');
        this.notifier.notify('success', 'Item added to cart');
      }
    } else {
      localStorage.setItem('NEXT_PATH', `${appRoutes.WHOLESALE_SHOP}/${makeWordURLFriendly(this.productDetails[0].department)}/${makeWordURLFriendly(this.productDetails[0].category)}/${this.productId}`);
      this.router.navigate([appRoutes.USER_LOGIN]);
    }
  }

}
