import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Cart, ICart } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  cartItemExist = localStorage.getItem('CART_ITEM');
  // cartItems:ICart = new Cart();
  cartItems:any = [];

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.cartItemExist == 'true'){
      this.getCartItems();
    }
  }

  userLogout() {
    const res = this.authService.userLogout();
  }

  getCartItems = async() => {
    const res = await this.cartService.getCartItem() as ICart;
    this.cartItems = res;
    console.log(this.cartItems);
  }

}
