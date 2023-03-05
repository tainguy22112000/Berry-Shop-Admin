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
import { useDispatch, useSelector } from 'react-redux';

import {
  setCouponEndDate,
  setCouponQuantity,
  setCouponStartDate,
} from '../../../store/coupon/couponAction';
import { CouponDataTypes } from '../../../store/coupon/couponType';

const CouponDate = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(
    ({ couponData }: CouponDataTypes) => couponData.couponQuantity,
  );

  const [startDay, setStartDay] = useState<Dayjs | null>(
    dayjs('2023-01-01T00:00:00.000Z'),
  );

  const [endDay, setEndDay] = useState<Dayjs | null>(
    dayjs('2023-01-01T00:00:00.000Z'),
  );

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCouponQuantity(parseInt(event.target.value)));
  };

  const handleChangeStartDate = (value: Dayjs) => {
    setStartDay(value);
    dispatch(
      setCouponStartDate({
        date: value?.format('DD/MM/YYYY'),
        time: value?.format('hh:mm:ss'),
      }),
    );
  };

  const handleChangeEndDate = (value: Dayjs) => {
    setEndDay(value);
    dispatch(
      setCouponEndDate({
        date: value?.format('DD/MM/YYYY'),
        time: value?.format('hh:mm:ss'),
      }),
    );
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ width: '20%' }}>
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

        <Stack spacing={2} width="80%">
          <Typography variant="subtitle1" component="h2">
            Hạn sử dụng
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
              <DateTimePicker
                label="Ngày bắt đầu"
                inputFormat="MM/DD/YYYY"
                value={startDay}
                onChange={handleChangeStartDate}
                renderInput={(params) => (
                  <TextField {...params} sx={{ flexGrow: 1 }} />
                )}
              />
              <DateTimePicker
                label="Ngày kết thúc"
                inputFormat="MM/DD/YYYY"
                value={endDay}
                onChange={handleChangeEndDate}
                renderInput={(params) => (
                  <TextField {...params} sx={{ flexGrow: 1 }} />
                )}
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
