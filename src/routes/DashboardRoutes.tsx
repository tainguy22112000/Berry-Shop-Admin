import React, { lazy } from 'react';

import { BASE_ROUTER, DASHBOARD_PATH } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
// dashboard page routing
const DashboardPage = Loadable(lazy(() => import('../views/dashboard/Default')));

// ==============================|| MAIN ROUTING ||============================== //

const DashboardRoutes = {
  path: BASE_ROUTER,
  element: <MainLayout />,
  children: [
    {
      path: DASHBOARD_PATH.Dashboard,
      element: <DashboardPage />,
    },
  ],
};

export default DashboardRoutes;
