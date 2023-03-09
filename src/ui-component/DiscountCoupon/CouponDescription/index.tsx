import {
  Divider,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCouponNote } from '../../../store/coupon/couponAction';
import { CouponDataTypes } from '../../../store/coupon/couponType';

const CouponDescription = () => {
  const dispatch = useDispatch();
  const description = useSelector(
    ({ couponData }: CouponDataTypes) => couponData.couponNote,
  );
  const handleChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setCouponNote(event.target.value));
  };
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography variant="subtitle1" component="h2">
          Ghi chú
        </Typography>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Ghi chú"
          style={{ width: '100%', padding: '10px' }}
          value={description}
          onChange={handleChangeNote}
        />
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponDescription;
