import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import { CouponDataTypes } from '@/store/coupon/couponType';

import { PriceOptions } from '../../../constants/enum';
import { useCouponPrice } from '../../../hooks/useCouponPrice';
import CouponPriceOptions from './CouponPriceOptions/CouponPriceOptions';
import { styles } from './index.styles';

const priceContent = [
  {
    value: PriceOptions.PERCENTAGE,
    label: 'Phần trăm',
    unit: '%',
  },
  {
    value: PriceOptions.CASH,
    label: 'Tiền mặt',
    unit: 'VND',
  },
];

const CouponPrice = () => {
  const { handleFreeShipClick } = useCouponPrice();
  const freeShip = useSelector(
    ({ couponData }: CouponDataTypes) => couponData.couponFreeShipping,
  );
  const option = useSelector(
    ({ couponData }: CouponDataTypes) => couponData.couponOptions,
  );

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" component="h2">
        Giá trị khuyến mãi
      </Typography>

      <Stack spacing={2}>
        {priceContent.map((items, index) => (
          <CouponPriceOptions {...items} key={index} options={option} />
        ))}
      </Stack>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={styles.radioColor}
              checked={freeShip}
              value={freeShip}
            />
          }
          label="Miễn phí giao hàng"
          sx={{ width: 'fit-content' }}
          onChange={handleFreeShipClick}
        />
      </FormGroup>
      <Divider />
    </Stack>
  );
};

export default CouponPrice;
