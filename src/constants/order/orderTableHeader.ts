import { IOrderTableHeader } from '@/types';

export const orderTableHeader: IOrderTableHeader[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Tên khách hàng',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Địa chỉ giao hàng',
  },
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'Đơn hàng số',
  },
  {
    id: 'orders',
    numeric: false,
    disablePadding: false,
    label: 'Sản phẩm đặt hàng',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Ngày đặt hàng',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng thái giao hàng',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Chỉnh sửa',
  },
];
