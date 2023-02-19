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
import React, { Dispatch } from 'react';

import { PriceOptions } from '../../../../constants/enum';
import { useCouponPrice } from '../../../../hooks/useCouponPrice';
import { styles } from './index.styles';

interface CouponPriceOptionsProps {
  value: string;
  label: string;
  unit: string;
  options: string;
  setOption: Dispatch<React.SetStateAction<string>>;
}

const CouponPriceOptions = ({
  value,
  label,
  unit,
  options,
  setOption,
}: CouponPriceOptionsProps) => {
  const {
    handleDiscountValue,
    discountValue,
    setDiscountValue,
    error,
    setError,
  } = useCouponPrice();
  const percentageError = value === PriceOptions.PERCENTAGE && error;

  const handlePriceOptions = () => {
    setError(false);
    setDiscountValue(0);
    setOption(value);
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
          value={discountValue}
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
