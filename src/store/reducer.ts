import { combineReducers } from 'redux';

import couponReducer from './coupon/couponReducer';
// reducer import
import customizationReducer from './customizationReducer';
import productDetailsReducer from './productDetailsReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  productData: productDetailsReducer,
  couponData: couponReducer,
});

export default reducer;
