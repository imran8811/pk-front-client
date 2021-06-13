export interface INewOrder {
  quatity : string,
  shippingAddress : string,
  whatsappNo : string,
  type: string
}

export class NewOrder implements INewOrder {
  quatity = '';
  shippingAddress = '';
  whatsappNo = '';
  type = '';
}
