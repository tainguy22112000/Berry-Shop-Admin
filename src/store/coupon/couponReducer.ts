import {
  SET_COUPON_CODE,
  SET_COUPON_END_DATE,
  SET_COUPON_FREE_SHIPPING,
  SET_COUPON_OPTIONS,
  SET_COUPON_QUANTITY,
  SET_COUPON_START_DATE,
  SET_COUPON_VALUE,
} from './couponAction';
import { CouponReducerType } from './couponType';

const initialState = {
  couponCode: '',
  couponValue: 0,
  couponOptions: 'cash',
  freeShipping: false,
  couponQuantity: 1,
  startDate: '',
};

const couponReducer = (
  state = initialState,
  { type, payload }: CouponReducerType,
) => {
  switch (type) {
    case SET_COUPON_CODE:
      return {
        ...state,
        couponCode: payload,
      };
    case SET_COUPON_VALUE:
      return {
        ...state,
        couponValue: payload,
      };
    case SET_COUPON_OPTIONS:
      return {
        ...state,
        couponOptions: payload,
      };
    case SET_COUPON_FREE_SHIPPING:
      return {
        ...state,
        freeShipping: payload,
      };
    case SET_COUPON_QUANTITY:
      return {
        ...state,
        couponQuantity: payload,
      };
    case SET_COUPON_START_DATE:
      return {
        ...state,
        startDate: payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default couponReducer;
