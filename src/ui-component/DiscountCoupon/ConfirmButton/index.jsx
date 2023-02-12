import { Button, Stack } from '@mui/material';
import * as React from 'react';

const ConfirmButton = () => {
  return (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 10, mt: 5 }}
      >
        <Button variant="contained" size="large">
          Tạo mã giảm giá
        </Button>
        <Button variant="outlined" size="large">
          Huỷ bỏ
        </Button>
      </Stack>
    </Stack>
  );
};

export default ConfirmButton;
