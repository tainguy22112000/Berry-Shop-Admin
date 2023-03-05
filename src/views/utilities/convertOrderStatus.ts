export const getColorChip = (status: string) => {
  switch (status) {
    case 'paymenting':
      return 'warning';
    case 'processing':
      return 'default';
    case 'canceled':
      return 'error';
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
    case 'canceled':
      return 'Đã huỷ hàng';
    default:
      return 'Đã giao hàng';
  }
};

export const listPaymensts = ['paymenting', 'processing', 'done', 'canceled'];