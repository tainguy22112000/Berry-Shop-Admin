import { useRoutes } from 'react-router-dom';

// routes
import AuthenticationRoutes from './AuthenticationRoutes';
import DashboardRoutes from './DashboardRoutes';
import MainRoutes from './MainRoutes';
import OrderRoutes from './OrderRoutes';
import ProductRoutes from './ProductRoutes';
import UserRoutes from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    MainRoutes,
    AuthenticationRoutes,
    OrderRoutes,
    ProductRoutes,
    UserRoutes,
    DashboardRoutes,
  ]);
}
