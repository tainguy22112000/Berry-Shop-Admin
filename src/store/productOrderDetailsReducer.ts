import * as actionTypes from './actions';

const initialState = {
  productId: '',
  productDetails: {},
}

const productOrderDetailsReducer = (
  state = initialState,
  action: Record<string, any>,
) => {
  switch(action.type) {
    case (actionTypes.PRODUCT_ORDER_DETAILS_OPEN):
      return {
        ...state,
        productId: action.data.id,
        productDetails: action.data,
      }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default productOrderDetailsReducer;