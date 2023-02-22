import * as actionTypes from './couponAction';
import { CouponReducerType } from './couponType';

const initialState = {
  actionTypes: '',
};

const couponReducer = (
  state = initialState,
  { type, payload }: CouponReducerType,
) => {
  switch (type) {
    case actionTypes.SET_COUPON_CODE:
      return {
        ...state,
        couponCode: payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default couponReducer;
