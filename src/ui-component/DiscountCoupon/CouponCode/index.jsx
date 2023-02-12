import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { IconCopy } from '@tabler/icons';
import { useState } from 'react';
import * as React from 'react';

const CouponCode = () => {
  const [name, setName] = useState('');

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" component="h2">
        Mã giảm giá
      </Typography>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="percent" control={<Radio />} label="Tự chọn" />
        <FormControlLabel value="male" control={<Radio />} label="Ngẫu nhiên" />
      </RadioGroup>
      <Stack spacing={1}>
        <div>
          <FormControl sx={{ width: '50%' }} size="small">
            <OutlinedInput
              id="outlined-adornment-amount"
              endAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="copy" size="small" color="dark">
                    <IconCopy />
                  </IconButton>
                </InputAdornment>
              }
              label="percent"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </FormControl>
          <Button
            variant="contained"
            color="dark"
            disableElevation
            sx={{ marginLeft: '10px', height: 40, color: '#fff' }}
            size="medium"
          >
            Tạo mã mới
          </Button>
        </div>
        <FormControl sx={{ width: '50%' }} size="small">
          <InputLabel htmlFor="outlined-adornment-amount">
            Nhập mã giảm giá
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="copy" size="small" color="dark">
                  <IconCopy />
                </IconButton>
              </InputAdornment>
            }
            label="percent"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FormControl>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponCode;
