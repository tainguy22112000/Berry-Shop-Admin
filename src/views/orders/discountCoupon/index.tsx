import React from 'react';
import { Stack, Typography } from '@mui/material';
import MainCard from '../../../ui-component/cards/MainCard';
import {
  ConfirmButton,
  CouponCode,
  CouponDate,
  CouponDescription,
  CouponPrice,
  CouponProductType,
} from '../../../ui-component/DiscountCoupon';

const DiscountCoupon = () => {
  return (
    <MainCard>
      <Typography variant="h2" component="h2" mb={2}>
        Chi tiết mã khuyến mãi
      </Typography>

      <Stack spacing={1}>
        <CouponCode />
        <CouponPrice />
        <CouponDate />
        <CouponProductType />
        <CouponDescription />
        <ConfirmButton />
      </Stack>
    </MainCard>
  );
};

export default DiscountCoupon;
