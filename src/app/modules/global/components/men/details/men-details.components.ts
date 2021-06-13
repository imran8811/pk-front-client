import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormArrayName, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

import { IProduct, IGeneralResponse, INewOrder } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service'
import { MEN_PANT_SIZES, URL_SYNTAX, USER_SYNTAX } from 'src/app/constants';
import { endpoints } from 'src/app/services/endpoints';
import { appRoutes } from 'src/app/services/app-routes';
import { NotifierService, NotifierOptions } from 'angular-notifier';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { OrderService, AuthService } from 'src/app/services';

@Component({
  selector: 'men-details',
  templateUrl: './men-details.component.html',
})

export class MenDetailsComponent implements OnInit {
  OrderForm: FormGroup;
  @ViewChild(ModalComponent) modal;
  currentDept:string = URL_SYNTAX.MEN;
  currentCategory:string = URL_SYNTAX.JEANS_PANTS;
  currentCategoryUser:string = USER_SYNTAX.JEANS_PANTS;
  private readonly notifier: NotifierService;
  readonly MEN_PANT_SIZES = MEN_PANT_SIZES;
  productDetails:any = [];
  productStyle:string | null = '';
  orderType = 'regularOrder';
  styleNo:string = '';
  SERVER_BASE_PATH = appRoutes.SERVER_BASE_PATH;

  get form() { return this.OrderForm.controls }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authservice: AuthService,
    private router : Router,
    notifierService: NotifierService,
    private orderservice: OrderService
  ) {
    this.notifier = notifierService
  }

  ngOnInit() {
    this.productStyle = this.route.snapshot.paramMap.get('styleNo');

    this.getDetails();

    this.OrderForm = this.fb.group({
      orderQuantity : ['1', Validators.required],
      shippingAddress: ['', Validators.required],
      whatsappNo: ['']
    })
  }

  getDetails = async () => {
    const res = await this.productService.getProductByID(this.productStyle) as IProduct;
    this.productDetails.push(res);
    this.styleNo = res.styleNo;
  }

  checkSession = async () => {
    const urlParams = this.route.snapshot.params;
    const nextPath = `${urlParams.dept}/${urlParams.category}/${urlParams.styleNo}`;
    const isLoggedIn = this.authservice.isLoggedIn();
    if(isLoggedIn){
      this.modal.show();
    } else {
      localStorage.setItem("NEXT_PATH", nextPath);
      this.router.navigate(['/login']);
    }
  }

  OrderNow = async () => {
    const res = await this.orderservice.createNewOrder(this.OrderForm.value) as INewOrder;
    if(res.type === 'success'){
      this.router.navigate(['/order-received']);
    }
  }
}
