export const getColorChip = (status: string) => {
  switch (status) {
    case 'paymenting':
      return 'warning';
    case 'processing':
      return 'default';
    default:
      return 'success';
  }
};

export const getPayments = (status: string) => {
  switch (status) {
    case 'paymenting':
      return 'Đang thanh toán';
    case 'processing':
      return 'Đang xử lý';
    default:
      return 'Đã giao hàng';
  }
};
