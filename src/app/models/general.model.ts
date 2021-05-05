export interface IGeneralResponse {
  type: string,
  message: string
}

export class GeneralResponse implements IGeneralResponse {
  type = "";
  message = "";
}
