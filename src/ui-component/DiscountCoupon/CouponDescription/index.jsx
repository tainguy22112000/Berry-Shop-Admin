import { Divider, Stack, TextareaAutosize, Typography } from '@mui/material';
import * as React from 'react';

const CouponDescription = () => {
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
        />
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponDescription;
