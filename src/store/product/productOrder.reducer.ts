// import { ProductOrderTypes } from './productOrder.type';
// import { ProductOrderAction } from './productOrder.type';
// const initialState = {
//   productId: '',
//   productDetails: {},
// };

// const { SET_PRODUCT_ORDER_DETAILS } = ProductOrderTypes;

// const productOrderDetailsReducer = (
//   state = initialState,
//   { type, payload }: ProductOrderAction,
// ) => {
//   switch (type) {
//     case SET_PRODUCT_ORDER_DETAILS:
//       return {
//         ...state,
//         productId: payload.id,
//         productDetails: payload.data,
//       };
//     default: {
//       return {
//         ...state,
//       };
//     }
//   }
// };

// export default productOrderDetailsReducer;

import { ProductOrderTypes } from './productOrder.type';
const initialState = {
  productId: '',
  productDetails: {},
};

const { SET_PRODUCT_ORDER_DETAILS } = ProductOrderTypes;

const productOrderDetailsReducer = (
  state = initialState,
  action: Record<string, any>,
) => {
  switch (action.type) {
    case SET_PRODUCT_ORDER_DETAILS:
      return {
        ...state,
        productId: action.data.id,
        productDetails: action.data,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default productOrderDetailsReducer;
