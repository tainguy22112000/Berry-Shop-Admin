import { IUserTableHeader } from '@/types';

export const userTableHeader: IUserTableHeader[] = [
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
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Số điện thoại',
  },
  {
    id: 'loyalty',
    numeric: false,
    disablePadding: false,
    label: 'Khách hàng thân thiết',
  },
  {
    id: 'vote',
    numeric: false,
    disablePadding: false,
    label: 'Đánh giá',
  },
];
