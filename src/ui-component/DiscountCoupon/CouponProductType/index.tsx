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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCouponProductDetails,
  setCouponProductType,
} from '../../../store/coupon/couponAction';
import { CouponDataTypes, ProductType } from '../../../store/coupon/couponType';

const products = Object.values(ProductType);

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
  const dispatch = useDispatch();
  const productType = useSelector(
    ({ couponData }: CouponDataTypes) => couponData.couponProductType,
  );

  const handleChangeProductType = (
    event: SelectChangeEvent<typeof productType>,
  ) => {
    const {
      target: { value },
    } = event;

    dispatch(
      setCouponProductType(
        typeof value === 'string' ? value.split(',') : value,
      ),
    );
  };

  const handleChangeProductDetails = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(setCouponProductDetails(event.target.value));
  };
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ flexGrow: 1 }}>
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
                onChange={handleChangeProductType}
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

        <FormControl sx={{ flexGrow: 1 }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" component="h2">
              Sản phẩm cụ thể
            </Typography>
            <TextField onChange={handleChangeProductDetails} />
          </Stack>
        </FormControl>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponProductType;
