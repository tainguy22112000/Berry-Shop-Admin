import { Stack, Typography } from '@mui/material';
import React from 'react';

import { OrderTableHeader } from '@/ui-component/OrderList';

import MainCard from '../../../ui-component/cards/MainCard';
import {
  ConfirmButton,
  CouponCode,
  CouponDate,
  CouponDescription,
  CouponPrice,
  CouponProductType,
  CouponTable,
} from '../../../ui-component/DiscountCoupon';

const DiscountCoupon = () => {
  return (
    <MainCard>
      <Typography variant="h2" component="h2" mb={2}>
        Chi tiết mã khuyến mãi
      </Typography>

      <Stack spacing={1}>
        <CouponTable />
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
