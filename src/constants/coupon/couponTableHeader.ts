import { ICouponTableHeader } from '@/types';

export const couponTableHeader: ICouponTableHeader[] = [
  {
    id: 'couponCode',
    numeric: false,
    disablePadding: true,
    label: 'Mã giảm giá',
  },
  {
    id: 'couponQuantity',
    numeric: true,
    disablePadding: false,
    label: 'Số lượng',
  },
  {
    id: 'couponValue',
    numeric: false,
    disablePadding: false,
    label: 'Giá trị',
  },
  {
    id: 'couponStartDate',
    numeric: false,
    disablePadding: false,
    label: 'Thời hạn sử dụng',
  },
  {
    id: 'couponFreeShipping',
    numeric: true,
    disablePadding: false,
    label: 'Miễn phí giao hàng',
  },
  {
    id: 'couponProductType',
    numeric: false,
    disablePadding: false,
    label: 'Loại sản phẩm',
  },
  {
    id: 'couponProductDetails',
    numeric: false,
    disablePadding: false,
    label: 'Sản phẩm',
  },
  {
    id: 'couponProductDetails',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];
