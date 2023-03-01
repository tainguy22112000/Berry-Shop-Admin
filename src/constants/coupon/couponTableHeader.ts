import { ICouponTableHeader } from '@/types';

export const couponTableHeader: ICouponTableHeader[] = [
  // {
  //   id: 'id',
  //   numeric: false,
  //   disablePadding: true,
  //   label: 'STT',
  // },
  {
    id: 'couponCode',
    numeric: false,
    disablePadding: true,
    label: 'Mã giảm giá',
  },
  // {
  //   id: 'type',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Loại giảm giá',
  // },
  {
    id: 'couponQuantity',
    numeric: false,
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
    numeric: false,
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
];
