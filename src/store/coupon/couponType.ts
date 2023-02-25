interface DateTypes {
  date: string;
  time: string;
}

interface CouponCodeReducerType {
  type: string;
  payload: string | number;
}

interface CouponDateTypes {
  type: string;
  payload: DateTypes;
}

interface CouponFreeShippingTypes {
  type: string;
  payload: boolean;
}

interface CouponProductType {
  type: string;
  payload: string[];
}

type CouponReducerType =
  | CouponCodeReducerType
  | CouponDateTypes
  | CouponFreeShippingTypes
  | CouponProductType;

export type { CouponCodeReducerType, CouponReducerType };

export enum CouponTypes {
  SET_COUPON_CODE = '@couponData/SET_COUPON_CODE',
  SET_COUPON_VALUE = '@couponData/SET_COUPON_VALUE',
  SET_COUPON_OPTIONS = '@couponData/SET_COUPON_OPTIONS',
  SET_COUPON_FREE_SHIPPING = '@couponData/SET_COUPON_FREE_SHIPPING',
  SET_COUPON_QUANTITY = '@couponData/SET_COUPON_QUANTITY',
  SET_COUPON_START_DATE = '@couponData/SET_COUPON_START_DATE',
  SET_COUPON_END_DATE = '@couponData/SET_COUPON_END_DATE',
  SET_COUPON_PRODUCT_TYPE = '@couponData/SET_COUPON_PRODUCT_TYPE',
  SET_COUPON_PRODUCT_DETAILS = '@couponData/SET_COUPON_PRODUCT_DETAILS',
  SET_COUPON_NOTE = '@couponData/SET_COUPON_NOTE',
}

export enum ProductType {
  ALL = 'Tất cả',
  DRINK = 'Đồ uống',
  SMOOTHY = 'Sinh tố',
  FRUIT = 'Trái cây',
  COFFEE = 'Cà phê',
}
export interface CouponDataTypes {
  couponData: {
    couponCode: string;
    couponValue: number;
    couponOptions: string;
    couponFreeShipping: boolean;
    couponQuantity: number;
    couponStartDate: {
      date: string;
      time: string;
    };
    couponEndDate: {
      date: string;
      time: string;
    };
    couponProductType: string[];
    couponProductDetails: string;
    couponNote: string;
  };
}
