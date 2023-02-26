import { ICouponTableHeader } from '@/types';

export const couponTableHeader: ICouponTableHeader[] = [
  // {
  //   id: 'id',
  //   numeric: false,
  //   disablePadding: true,
  //   label: 'STT',
  // },
  {
    id: 'code',
    numeric: false,
    disablePadding: false,
    label: 'Mã giảm giá',
  },
  // {
  //   id: 'type',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Loại giảm giá',
  // },
  {
    id: 'quantity',
    numeric: false,
    disablePadding: false,
    label: 'Số lượng',
  },
  {
    id: 'value',
    numeric: false,
    disablePadding: false,
    label: 'Giá trị',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Thời hạn sử dụng',
  },
  {
    id: 'isFreeShip',
    numeric: false,
    disablePadding: false,
    label: 'Miễn phí giao hàng',
  },
  {
    id: 'productType',
    numeric: false,
    disablePadding: false,
    label: 'Loại sản phẩm',
  },
  {
    id: 'products',
    numeric: false,
    disablePadding: false,
    label: 'Sản phẩm',
  },
];
