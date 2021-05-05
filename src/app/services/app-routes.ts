export class appRoutes {
  static baseAddress = window.location.origin === 'http://localhost:4200' ? 'http://localhost:4200' : 'https://www.pkapparel.com';

  static USER_LOGIN = '/login';
  static USER_REGISTER = '/signup';
  static FORGOT_PASSWORD = '/forgot-password';
  static WHOLESALE_SHOP = '/shop';
}
