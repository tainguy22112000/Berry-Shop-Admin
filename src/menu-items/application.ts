// assets
import { IconKey, IconNotes, IconShoppingCart, IconUser, IconWindmill } from '@tabler/icons';

import { ODERS_PATH, ORDERS_PAGE_ROUTER, PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH, USERS_PAGE_ROUTER, USERS_PATH } from '../constants/routes';

// constant
const icons = {
  IconKey,
  IconWindmill,
  IconUser,
  IconShoppingCart,
  IconNotes,
};

// application constants
const USER_PAGE = {
  Details: 'Thông tin chi tiết',
  Profile: 'Thông tin khách hàng',
  Account: 'Tài khoản khách hàng',
  Users: 'Khách hàng',
  Products: 'Sản phẩm',
  Orders: 'Đơn hàng',
  OrderList: 'Danh sách đơn hàng',
  DiscountCoupon: 'Tạo mã giảm giá',
  OrderDetails: 'Chi tiết đơn hàng',
  ProductDetails: 'Chi tiết sản phẩm',
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const application = {
  id: USER_PAGE.Details,
  title: USER_PAGE.Details,
  type: 'group',
  children: [
    {
      id: USER_PAGE.Users,
      title: USER_PAGE.Users,
      type: 'collapse',
      icon: icons.IconUser,

      children: [
        {
          id: USER_PAGE.Profile,
          title: USER_PAGE.Profile,
          type: 'item',
          url: `${USERS_PAGE_ROUTER}/${USERS_PATH.Profile}`,
          breadcrumbs: true,
        },
        {
          id: USER_PAGE.Account,
          title: USER_PAGE.Account,
          type: 'item',
          url: `${USERS_PAGE_ROUTER}/${USERS_PATH.Account}`,
          breadcrumbs: true,
        },
      ],
    },
    {
      id: USER_PAGE.Orders,
      title: USER_PAGE.Orders,
      type: 'collapse',
      icon: icons.IconNotes,
      children: [
        {
          id: USER_PAGE.OrderList,
          title: USER_PAGE.OrderList,
          type: 'item',
          url: `${ORDERS_PAGE_ROUTER}/${ODERS_PATH.OrderList}`,
          breadcrumbs: true,
        },
        {
          id: USER_PAGE.OrderDetails,
          title: USER_PAGE.OrderDetails,
          type: 'item',
          url: `${ORDERS_PAGE_ROUTER}/${ODERS_PATH.OrderDetails}`,
          breadcrumbs: true,
        },
        {
          id: USER_PAGE.DiscountCoupon,
          title: USER_PAGE.DiscountCoupon,
          type: 'item',
          url: `${ORDERS_PAGE_ROUTER}/${ODERS_PATH.DiscountCoupon}`,
          breadcrumbs: true,
        },
      ],
    },
    {
      id: USER_PAGE.Products,
      title: USER_PAGE.Products,
      type: 'collapse',
      icon: icons.IconShoppingCart,
      children: [
        {
          id: USER_PAGE.ProductDetails,
          title: USER_PAGE.ProductDetails,
          type: 'item',
          url: `${PRODUCTS_PAGE_ROUTER}/${PRODUCTS_PATH.ProductList}`,
          breadcrumbs: true,
        },
      ],
    },
  ],
};

export default application;
