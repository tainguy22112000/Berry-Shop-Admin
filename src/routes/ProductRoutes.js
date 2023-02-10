// project imports
import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from 'constants/routes';
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// user page routing
const ProductDetailsPage = Loadable(lazy(() => import('views/products/productDetails')));

// ==============================|| MAIN ROUTING ||============================== //

const ProductRoutes = {
  path: PRODUCTS_PAGE_ROUTER,
  element: <MainLayout />,
  children: [
    {
      path: PRODUCTS_PATH.ProductDetails,
      element: <ProductDetailsPage />,
    },
  ],
};

export default ProductRoutes;
