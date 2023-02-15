import * as actionTypes from './actions';

const initialState = {
  productId: '',
  productDetails: {},
}

const productDetailsReducer = (
  state = initialState,
  action: Record<string, any>,
) => {
  switch(action.type) {
    case (actionTypes.PRODUCT_DETAILS_OPEN):
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

export default productDetailsReducer;