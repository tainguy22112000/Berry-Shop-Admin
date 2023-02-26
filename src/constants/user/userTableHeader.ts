import { IUserTableHeader } from '@/types';

export const userTableHeader: IUserTableHeader[] = [
  {
    id: 'firstName',
    numeric: false,
    disablePadding: true,
    label: 'Tên khách hàng',
  },
  {
    id: 'gender',
    numeric: false,
    disablePadding: false,
    label: 'Giới tính',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Địa chỉ',
  },
  {
    id: 'txtPhone',
    numeric: false,
    disablePadding: false,
    label: 'Số điện thoại',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
];
