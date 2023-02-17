// assets
import { IconDashboard } from '@tabler/icons';

import { BASE_ROUTER, DASHBOARD_PATH } from '../constants/routes';

// constant
const icons = { IconDashboard };

const DASHBOARD_PAGE = {
  Dashboard: 'Bảng điều khiển',
  HomePage: 'Trang chủ',
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: DASHBOARD_PAGE.Dashboard,
  title: DASHBOARD_PAGE.Dashboard,
  type: 'group',
  children: [
    {
      id: DASHBOARD_PAGE.Dashboard,
      title: DASHBOARD_PAGE.HomePage,
      type: 'item',
      url: `${BASE_ROUTER}${DASHBOARD_PATH.Dashboard}`,
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
