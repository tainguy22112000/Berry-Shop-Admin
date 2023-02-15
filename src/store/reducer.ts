import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import productDetailsReducer from './productDetailsReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    productData: productDetailsReducer,
});

export default reducer;
