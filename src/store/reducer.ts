import { combineReducers } from 'redux';

import couponReducer from './coupon/couponReducer';
// reducer import
import customizationReducer from './customizationReducer';
import productOrderDetailsReducer from './product/productOrder.reducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  productOrderData: productOrderDetailsReducer,
  couponData: couponReducer,
});

export default reducer;
