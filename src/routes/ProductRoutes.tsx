// project imports
import React, { lazy } from 'react';

import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import NewProductForm from '../views/products/ProductForm';
import ProductList from '../views/products/ProductList';

// user page routing
const ProductDetailsPage = Loadable(lazy(() => import('../views/products/ProductList')));
const ProductDetails = lazy(() => import('../views/products/ProductDetails'));
const ProductDetailsTest = lazy(() => import('../views/products/ProductDetailsTest'));

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
      element: <ProductDetailsTest />
    },
    {
      path: `${PRODUCTS_PATH.ProductCreate}`,
      element: <NewProductForm />
    }
  ],
};

export default ProductRoutes;
