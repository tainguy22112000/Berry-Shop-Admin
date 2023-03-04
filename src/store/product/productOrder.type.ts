export enum ProductOrderTypes {
  SET_PRODUCT_ORDER_DETAILS = '@productData/SET_PRODUCT_ORDER_DETAILS',
}

export interface ProductOrderAction {
  type: string;
  payload: {
    id: string;
    data: any;
  };
}
