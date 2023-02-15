// project imports
import React, { lazy, useEffect } from 'react';

import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import { useSelector } from 'react-redux';

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
      path: `${PRODUCTS_PATH.ProductList}/04FSB7rWFlyQTdxphZ5k`,
      element: <ProductDetails data={{}}/>
    }
  ],
};

export default ProductRoutes;
