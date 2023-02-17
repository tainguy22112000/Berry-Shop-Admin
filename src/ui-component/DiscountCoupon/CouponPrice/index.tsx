import {
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import * as React from 'react';

const CouponPrice = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" component="h2">
        Giá trị khuyến mãi
      </Typography>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="percent"
          control={<Radio />}
          label="Phần trăm"
        />
        <FormControlLabel value="male" control={<Radio />} label="Tiền mặt" />
        <FormControlLabel value="male" control={<Radio />} label="Free Ship" />
      </RadioGroup>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ width: '40%' }} size="small">
          <InputLabel htmlFor="outlined-adornment-amount">Phần trăm</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={<InputAdornment position="start">%</InputAdornment>}
            label="percent"
            value=""
          />
        </FormControl>
        <FormControl sx={{ width: '60%' }} size="small">
          <InputLabel htmlFor="outlined-adornment-amount">Tiền mặt</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={<InputAdornment position="start">VND</InputAdornment>}
            label="price"
            value=""
          />
        </FormControl>
      </Stack>

      <Divider />
    </Stack>
  );
};

export default CouponPrice;
