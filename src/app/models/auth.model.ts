export interface IUserLogin {
  type : string,
  message: string,
  data : IUserData,
  email : string,
  password: string
}
export interface IUserData {
  isLoggedIn : string,
  fullName : string,
  businessName : string
}
export class UserLogin implements IUserLogin {
  type = '';
  message = '';
  data = {
    isLoggedIn : '',
    fullName : '',
    businessName : ''
  };
  email = '';
  password = '';
}
export interface IUserSignup {
  type: string,
  message: string,
  fullName: string,
  businessName: string,
  email : string,
  password : string,
}
export class userSignup implements IUserSignup {
  type = '';
  message = '';
  fullName = '';
  businessName = '';
  email = '';
  password = '';
}
