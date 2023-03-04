import { ProductOrderTypes } from './productOrder.type';
const { SET_PRODUCT_ORDER_DETAILS } = ProductOrderTypes;

export const setProductOrderDetails = (value: Record<string, any>) => ({
  type: SET_PRODUCT_ORDER_DETAILS,
  data: value,
});
