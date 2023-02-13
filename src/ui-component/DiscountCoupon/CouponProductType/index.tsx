import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';

const CouponProductType = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ width: '40%' }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" component="h2">
              Loại sản phẩm
            </Typography>
            <FormControl size="medium" fullWidth>
              <InputLabel id="demo-select-small">Chọn</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value=""
                label="product"
                onChange={() => {}}
              >
                <MenuItem value="">
                  <em>Chọn</em>
                </MenuItem>
                <MenuItem value={10}>Tất cả</MenuItem>
                <MenuItem value={30}>Đồ uống</MenuItem>
                <MenuItem value={20}>Cà phê</MenuItem>
                <MenuItem value={30}>Trái cây</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </FormControl>

        <FormControl sx={{ width: '60%' }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" component="h2">
              Sản phẩm cụ thể
            </Typography>
            <TextField />
          </Stack>
        </FormControl>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponProductType;
