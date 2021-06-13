export class endpoints {
  //base address
  static baseAddress = window.location.origin === 'http://localhost:4200' ? 'http://localhost:3000/api' : 'https://www.pkapparel.com/api';

  //users
  static USER_LOGIN = endpoints.baseAddress + '/login';
  static USER_REGISTER = endpoints.baseAddress + '/signup';
  static FORGOT_PASSWORD = endpoints.baseAddress + '/forgot-password';
  static USER_LOGOUT = endpoints.baseAddress + '/user/logout';

  //products
  static GET_ALL_PRODUCTS = endpoints.baseAddress + '/product/get/all';
  static GET_PRODUCT = endpoints.baseAddress + '/product/get';

  //cart
  static ADD_TO_CART = endpoints.baseAddress + '/cart/add';
  static GET_CART_ITEMS = endpoints.baseAddress + '/cart/get/all'

  //order
  static ADD_NEW_ORDER = endpoints.baseAddress + '/order/add'


}
