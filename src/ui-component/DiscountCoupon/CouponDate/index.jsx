import {
  Divider,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';

const CouponDate = () => {
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
              size="small"
            />
          </Stack>
        </FormControl>

        <Stack spacing={2} sx={{ width: '80%' }}>
          <Typography variant="subtitle1" component="h2">
            Hạn sử dụng
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
              <DesktopDatePicker
                label="Ngày bắt đầu"
                inputFormat="MM/DD/YYYY"
                value=""
                onChange={() => {}}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: '50%' }} size="small" />
                )}
              />
              <DesktopDatePicker
                label="Ngày kết thúc"
                inputFormat="MM/DD/YYYY"
                value=""
                onChange={() => {}}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: '50%' }} size="small" />
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
