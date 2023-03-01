import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setOpenCreateModal } from '../../../store/coupon/couponAction';
import { CouponDataTypes } from '../../../store/coupon/couponType';
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
import { OrderTableHeader } from '../../../ui-component/OrderList';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = {
  display: 'flex',
  justifyContent: 'center',
  height: 100,
  overflow: 'hidden',
};

const DiscountCoupon = () => {
  const dispatch = useDispatch();
  const open =
    useSelector(({ couponData }) => couponData.openCreateModal) ?? false;
  console.log('openCreateModal', open);

  const handleOnClose = () => {
    dispatch(setOpenCreateModal(false));
  };
  return (
    <MainCard>
      <CouponTable />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOnClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
      >
        <DialogTitle>
          {/* <Typography variant="h2" component="h2" mb={2}> */}
          Tạo mã mới
          {/* </Typography> */}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <CouponCode />
            <CouponPrice />
            <CouponDate />
            <CouponProductType />
            <CouponDescription />
          </Stack>
        </DialogContent>
        <DialogActions sx={styles}>
          <ConfirmButton />
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default DiscountCoupon;
