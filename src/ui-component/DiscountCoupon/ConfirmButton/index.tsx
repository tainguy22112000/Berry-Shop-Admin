import { Button, Stack } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { useCouponCode } from '../../../hooks/useCouponCode';
import { useCouponPrice } from '../../../hooks/useCouponPrice';
import { styles } from './index.styles';

interface CouponCodeType {
  couponData: {
    couponCode: string;
  };
}

const ConfirmButton = () => {
  // const { couponCode } = useCouponCode();
  const { discountValue } = useCouponPrice();
  const couponCode = useSelector(
    (state: CouponCodeType) => state.couponData.couponCode,
  );
  console.log(couponCode);
  console.log(discountValue);

  return (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 10, mt: 5 }}
      >
        <Button variant="contained" size="large" sx={styles.button}>
          Tạo mã giảm giá
        </Button>
        <Button variant="outlined" size="large" sx={styles.cancel}>
          Huỷ bỏ
        </Button>
      </Stack>
    </Stack>
  );
};

export default ConfirmButton;
