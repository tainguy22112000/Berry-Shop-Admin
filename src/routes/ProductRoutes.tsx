// project imports
import React, { lazy } from 'react';

import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// user page routing
const ProductDetailsPage = Loadable(lazy(() => import('../views/products/productList')));
const ProductDetails = lazy(() => import('../views/products/productDetails'));

// ==============================|| MAIN ROUTING ||============================== //

const ProductRoutes = {
  path: PRODUCTS_PAGE_ROUTER,
  element: <MainLayout />,
  children: [
    {
      path: PRODUCTS_PATH.ProductList,
      element: <ProductDetailsPage />,
    },
    {
      path: `${PRODUCTS_PATH.ProductList}/:id`,
      element: <ProductDetails />
    }
  ],
};

export default ProductRoutes;
