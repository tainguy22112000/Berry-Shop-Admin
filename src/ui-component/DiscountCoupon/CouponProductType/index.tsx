import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

const products = ['Tất cả', 'Đồ uống', 'Cà phê', 'Trái cây'];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CouponProductType = () => {
  const [productType, setProductType] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof productType>) => {
    const {
      target: { value },
    } = event;
    setProductType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ width: '20%' }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" component="h2">
              Loại sản phẩm
            </Typography>
            <FormControl>
              <InputLabel id="demo-multiple-name-label">Chọn</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={productType}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {products.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </FormControl>

        <FormControl sx={{ width: '30%' }}>
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
