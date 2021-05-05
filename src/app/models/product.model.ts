export interface IProduct {
  department : string,
  category : string,
  title : string,
  styleNo : string,
  color : string,
  prices : IPrices[],
  images : IImages[],
  sizes : any[],
  stock : any[],
  description : string
}

export class Product implements IProduct {
  department = '';
  category = '';
  title = '';
  styleNo = '';
  color = '';
  prices = [];
  images = [];
  sizes = [];
  stock = [];
  description = '';
}

export interface IPrices {
  samplePrice : number,
  lessThan100 : number,
  regularPrice : number
}

export class Prices implements IPrices {
  samplePrice = 0;
  lessThan100 = 0;
  regularPrice = 0;
}

export interface IImages {
  frontImage : string,
  backImage : string,
  img1 : string,
  img2 : string,
  sizeChart : string
}

export class Images implements IImages {
  frontImage = '';
  backImage = '';
  img1 = '';
  img2 = '';
  sizeChart = '';
}
