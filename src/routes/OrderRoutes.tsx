// project imports
import React, { lazy } from 'react';

import { ODERS_PATH, ORDERS_PAGE_ROUTER } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// user page routing
const OrderListPage = Loadable(lazy(() => import('../views/orders/orderList')));
const OrderDetailsPage = Loadable(lazy(() => import('../views/orders/orderDetails')));
const DiscountCouponPage = Loadable(lazy(() => import('../views/orders/discountCoupon')));

// ==============================|| MAIN ROUTING ||============================== //

const OrderRoutes = {
  path: ORDERS_PAGE_ROUTER,
  element: <MainLayout />,
  children: [
    {
      path: ODERS_PATH.OrderList,
      element: <OrderListPage />,
    },
    {
      path: ODERS_PATH.OrderDetails,
      element: <OrderDetailsPage />,
    },
    {
      path: ODERS_PATH.DiscountCoupon,
      element: <DiscountCouponPage />,
    },
  ],
};

export default OrderRoutes;
