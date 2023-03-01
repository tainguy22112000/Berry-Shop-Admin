import { Button, IconButton, Stack, Typography } from '@mui/material';
import { IconPlus, IconTrash } from '@tabler/icons';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { setOpenCreateModal } from '../../../store/coupon/couponAction';
import { styles } from './index.styles';

export const CouponToolbar = () => {
  const dispatch = useDispatch();
  const handleCreateNew = () => {
    dispatch(setOpenCreateModal(true));
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="subtitle1" component="h2">
        Danh sách mã giảm giá
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton sx={styles.trash} aria-label="delete">
          <IconTrash size={24} />
        </IconButton>
        <Button
          variant="contained"
          size="large"
          sx={styles.button}
          onClick={handleCreateNew}
          startIcon={<IconPlus size={24} />}
        >
          Tạo mới
        </Button>
      </Stack>
    </Stack>
  );
};

export default CouponToolbar;
