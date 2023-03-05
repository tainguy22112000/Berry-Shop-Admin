import { IProductTableHeader } from '@/types';

export const productTableHeader: IProductTableHeader[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Tên sản phẩm',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Số lượng',
  },
  {
    id: 'mlAndPrice',
    numeric: true,
    disablePadding: false,
    label: 'Loại',
  },
  {
    id: 'moreCombina',
    numeric: true,
    disablePadding: false,
    label: 'Thành phần',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Đơn giá',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Xem chi tiết / Xoá',
  },
];
