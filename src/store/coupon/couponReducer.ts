import { PriceOptions } from '../../constants/enum';
import { CouponReducerType, CouponTypes } from './couponType';

const initialState = {
  couponCode: '',
  couponValue: 0,
  couponOptions: PriceOptions.CASH,
  couponFreeShipping: false,
  couponQuantity: 0,
  couponStartDate: {
    date: '01-01-2023',
    time: '00:00:00',
  },
  couponEndDate: {
    date: '01-01-2023',
    time: '00:00:00',
  },
  couponProductType: [],
  couponProductDetails: '',
  couponNote: '',
};

const {
  SET_COUPON_CODE,
  SET_COUPON_FREE_SHIPPING,
  SET_COUPON_OPTIONS,
  SET_COUPON_QUANTITY,
  SET_COUPON_START_DATE,
  SET_COUPON_END_DATE,
  SET_COUPON_VALUE,
  SET_COUPON_PRODUCT_TYPE,
  SET_COUPON_PRODUCT_DETAILS,
  SET_COUPON_NOTE,
  SET_OPEN_CREATE_MODAL,
  SET_CLEAR_DATA,
} = CouponTypes;

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
        couponFreeShipping: payload,
      };
    case SET_COUPON_QUANTITY:
      return {
        ...state,
        couponQuantity: payload,
      };
    case SET_COUPON_START_DATE:
      return {
        ...state,
        couponStartDate: payload,
      };
    case SET_COUPON_END_DATE:
      return {
        ...state,
        couponEndDate: payload,
      };
    case SET_COUPON_PRODUCT_TYPE:
      return {
        ...state,
        couponProductType: payload,
      };
    case SET_COUPON_PRODUCT_DETAILS:
      return {
        ...state,
        couponProductDetails: payload,
      };
    case SET_COUPON_NOTE:
      return {
        ...state,
        couponNote: payload,
      };
    case SET_OPEN_CREATE_MODAL:
      return {
        ...state,
        openCreateModal: payload,
      };
    case SET_CLEAR_DATA:
      return {
        ...initialState,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default couponReducer;
