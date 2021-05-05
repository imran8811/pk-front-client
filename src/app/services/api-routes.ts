export class apiRoutes {
  //base address
  static baseAddress = window.location.origin === 'http://localhost:4200' ? 'http://localhost:3000/api' : 'https://www.pkapparel.com/api';

  //users
  static USER_LOGIN = apiRoutes.baseAddress + '/login';
  static USER_REGISTER = apiRoutes.baseAddress + '/signup';
  static FORGOT_PASSWORD = apiRoutes.baseAddress + '/forgot-password';
  static USER_LOGOUT = apiRoutes.baseAddress + '/user/logout';

  //products
  static GET_PRODUCTS = apiRoutes.baseAddress + '/product/get';

  //cart
  static ADD_TO_CART = apiRoutes.baseAddress + '/cart/add';
  static GET_CART_ITEMS = apiRoutes.baseAddress + '/cart/get/all'


}
