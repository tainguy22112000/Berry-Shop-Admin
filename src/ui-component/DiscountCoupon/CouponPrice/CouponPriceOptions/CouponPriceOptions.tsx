import {
  Alert,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PriceOptions } from '../../../../constants/enum';
import { useCouponPrice } from '../../../../hooks/useCouponPrice';
import {
  setCouponOptions,
  setCouponValue,
} from '../../../../store/coupon/couponAction';
import { CouponDataTypes } from '../../../../store/coupon/couponType';
import { styles } from './index.styles';

interface CouponPriceOptionsProps {
  value: string;
  label: string;
  unit: string;
  options: string;
}

const CouponPriceOptions = ({
  value,
  label,
  unit,
  options,
}: CouponPriceOptionsProps) => {
  const { handleDiscountValue, error, setError } = useCouponPrice();
  const dispatch = useDispatch();
  const couponValue = useSelector(
    ({ couponData }: CouponDataTypes) => couponData.couponValue,
  );
  const percentageError = value === PriceOptions.PERCENTAGE && error;

  const handlePriceOptions = () => {
    setError(false);
    dispatch(setCouponValue(0));
    dispatch(setCouponOptions(value));
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value={options}
          control={<Radio sx={styles.radioColor} checked={value === options} />}
          label={label}
          sx={styles.radioWith}
          onChange={handlePriceOptions}
        />
      </RadioGroup>
      <FormControl sx={{ width: '40%' }} size="small">
        <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount quantity"
          endAdornment={
            <InputAdornment position="start">{unit}</InputAdornment>
          }
          label={label}
          value={value === options ? couponValue : 0}
          disabled={value !== options}
          type="number"
          onChange={handleDiscountValue}
          datatype="currency"
          error={percentageError}
        />
      </FormControl>
      {percentageError && (
        <Alert severity="error">
          <strong>Lỗi:</strong> Giá trị phần trăm chỉ trong khoảng từ 0 - 100 %
        </Alert>
      )}
    </Stack>
  );
};

export default CouponPriceOptions;
