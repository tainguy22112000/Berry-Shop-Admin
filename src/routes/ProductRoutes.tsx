// project imports
import React, { lazy } from 'react';

import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import ProductDetails from '../views/products/ProductDetails';
import NewProductForm from '../views/products/ProductForm';

const ProductOrderLists = Loadable(lazy(() => import('../views/products/ProductOrderLists')));
const ProductOrderDetails = Loadable(lazy(() => import('../views/products/ProductOrderDetails')));


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
      path: `${PRODUCTS_PATH.ProductCreate}`,
      element: <NewProductForm />
    },
    {
      path: `${PRODUCTS_PATH.ProductLists}`,
      element: <ProductDetails />
    }
  ],
};

export default ProductRoutes;
