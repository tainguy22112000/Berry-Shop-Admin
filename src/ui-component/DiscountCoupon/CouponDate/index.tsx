import {
  Divider,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';

const CouponDate = () => {
  const [quantity, setQuantity] = useState<number>();
  // const [error, setError] = useState<boolean>(false);
  const [startDay, setStartDay] = useState<Dayjs | null>(
    dayjs('2018-01-01T00:00:00.000Z'),
  );

  const [endDay, setEndDay] = useState<Dayjs | null>(
    dayjs('2018-01-01T00:00:00.000Z'),
  );
  console.log(startDay);
  console.log(endDay);
  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ width: '10%' }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" component="h2">
              Số lượng
            </Typography>
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              id="filled-error-helper-text"
              required
              value={quantity}
              onChange={handleChangeQuantity}
              type="number"
            />
          </Stack>
        </FormControl>

        <Stack spacing={2} sx={{ width: '80%' }}>
          <Typography variant="subtitle1" component="h2">
            Hạn sử dụng
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
              <DateTimePicker
                label="Ngày bắt đầu"
                inputFormat="MM/DD/YYYY"
                value={startDay}
                onChange={(newValue) => {
                  setStartDay(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="Ngày kết thúc"
                inputFormat="MM/DD/YYYY"
                value={endDay}
                onChange={(newValue) => {
                  setEndDay(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponDate;
