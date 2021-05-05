export interface ICart {
  sizes: string[],
  quantity: string[],
  productId: string,
  styleNo: string,
  orderType: string
}

export class Cart implements ICart {
  sizes = [];
  quantity = [];
  productId = '';
  styleNo = '';
  orderType = '';
}
