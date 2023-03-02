import React, { lazy } from 'react';

import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
// import ProductDetails from '../views/products/ProductDetails';
import ProductDetails from '../views/products/productDetails';
import ProductFormUpdate from '../views/products/ProductFormUpdate';

const ProductOrderLists = Loadable(lazy(() => import('../views/products/ProductOrderLists')));
const ProductOrderDetails = Loadable(lazy(() => import('../views/products/ProductOrderDetails')));
const ProductLists = Loadable(lazy(() => import('../views/products/ProductLists')));


const ProductRoutes = {
  path: PRODUCTS_PAGE_ROUTER,
  element: <MainLayout />,
  children: [
    {
      path: PRODUCTS_PATH.ProductOrderList,
      element: <ProductOrderLists />,
    },
    {
      path: `${PRODUCTS_PATH.ProductOrderList}/:id`,
      element: <ProductOrderDetails />
    },
    {
      path: `${PRODUCTS_PATH.ProductLists}`,
      element: <ProductLists />
    },
    {
      path: `${PRODUCTS_PATH.ProductLists}/:id`,
      element: <ProductDetails />
    },
    {
      path: `${PRODUCTS_PATH.ProductCreate}`,
      element: <ProductFormUpdate />
    },
  ],
};

export default ProductRoutes;
