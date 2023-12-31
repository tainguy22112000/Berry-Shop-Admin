import {
  IOrderTableHeader,
  IProductTableHeader,
  ITestTableHeader,
} from '@/types';

export const testTableHeader: ITestTableHeader[] = [
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

export const orderTableHeader: IOrderTableHeader[] = [
  {
    id: 'recipientName',
    numeric: false,
    disablePadding: false,
    label: 'Tên khách hàng',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Địa chỉ',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Số điện thoại',
  },
  {
    id: 'createOn',
    numeric: true,
    disablePadding: false,
    label: 'Thời gian tạo',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    id: 'paymentMethods',
    numeric: true,
    disablePadding: false,
    label: 'Thanh toán',
  },
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: '',
  },
];

export const productTableHeader: IProductTableHeader[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Tên sản phẩm',
  },
  {
    id: 'group',
    numeric: false,
    disablePadding: false,
    label: 'Loại sản phẩm',
  },
  {
    id: 'moreCombina',
    numeric: true,
    disablePadding: false,
    label: 'Thành phần',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Số lượng',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Đơn giá',
  },
  {
    id: '',
    numeric: true,
    disablePadding: false,
    label: 'Xem chi tiết/xoá',
  },
];
