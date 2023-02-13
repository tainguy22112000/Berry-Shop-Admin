// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// dashboard constants
const DASHBOARD_PAGE = {
  Dashboard: 'Dashboard',
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: DASHBOARD_PAGE.Dashboard,
  title: DASHBOARD_PAGE.Dashboard,
  type: 'group',
  children: [
    {
      id: DASHBOARD_PAGE.Dashboard,
      title: DASHBOARD_PAGE.Dashboard,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
