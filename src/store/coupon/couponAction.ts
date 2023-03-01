import { CouponTypes, ProductType } from './couponType';
const {
  SET_COUPON_CODE,
  SET_COUPON_END_DATE,
  SET_COUPON_FREE_SHIPPING,
  SET_COUPON_OPTIONS,
  SET_COUPON_QUANTITY,
  SET_COUPON_START_DATE,
  SET_COUPON_VALUE,
  SET_COUPON_PRODUCT_TYPE,
  SET_COUPON_PRODUCT_DETAILS,
  SET_COUPON_NOTE,
  SET_OPEN_CREATE_MODAL,
  SET_CLEAR_DATA,
} = CouponTypes;

export const setCouponCode = (value: string) => ({
  type: SET_COUPON_CODE,
  payload: value,
});

export const setCouponValue = (value: number) => ({
  type: SET_COUPON_VALUE,
  payload: value,
});

export const setCouponOptions = (value: string) => ({
  type: SET_COUPON_OPTIONS,
  payload: value,
});

export const setCouponFreeShipping = (value: boolean) => ({
  type: SET_COUPON_FREE_SHIPPING,
  payload: value,
});

export const setCouponQuantity = (value: number) => ({
  type: SET_COUPON_QUANTITY,
  payload: value,
});

export const setCouponStartDate = (value: { date: string; time: string }) => ({
  type: SET_COUPON_START_DATE,
  payload: value,
});

export const setCouponEndDate = (value: { date: string; time: string }) => ({
  type: SET_COUPON_END_DATE,
  payload: value,
});

export const setCouponProductType = (value: string[]) => ({
  type: SET_COUPON_PRODUCT_TYPE,
  payload: value,
});

export const setCouponProductDetails = (value: string) => ({
  type: SET_COUPON_PRODUCT_DETAILS,
  payload: value,
});

export const setCouponNote = (value: string) => ({
  type: SET_COUPON_NOTE,
  payload: value,
});

export const setOpenCreateModal = (value: boolean) => ({
  type: SET_OPEN_CREATE_MODAL,
  payload: value,
});

export const setClearData = () => ({
  type: SET_CLEAR_DATA,
});
