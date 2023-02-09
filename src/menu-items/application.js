// assets
import { IconKey, IconNotes, IconShoppingCart, IconUser, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconWindmill,
  IconUser,
  IconShoppingCart,
  IconNotes,
};

// router constants
const USER_PAGE = {
  Application: 'Application',
  Profile: 'Profile',
  Account: 'Account',
  Users: 'Users',
  Products: 'Products',
  Orders: 'Orders',
  OrderList: 'Order List',
  DiscountCoupon: 'Discount Coupon',
  OrderDetails: 'Order Details',
  ProductDetails: 'Product Details',
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const application = {
  id: USER_PAGE.Application,
  title: USER_PAGE.Application,
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
          url: '/pages/login/login3',
          target: true,
        },
        {
          id: USER_PAGE.Account,
          title: USER_PAGE.Account,
          type: 'item',
          url: '/pages/register/register3',
          target: true,
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
          url: '/icons/tabler-icons',
          breadcrumbs: false,
        },
        {
          id: USER_PAGE.OrderDetails,
          title: USER_PAGE.OrderDetails,
          type: 'item',
          url: '/icons/material-icons',
          breadcrumbs: false,
        },
        {
          id: USER_PAGE.DiscountCoupon,
          title: USER_PAGE.DiscountCoupon,
          type: 'item',
          url: '/icons/material-icons',
          breadcrumbs: false,
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
          url: '/icons/tabler-icons',
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default application;
