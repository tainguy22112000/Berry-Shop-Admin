import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import * as React from 'react';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

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
const DiscountCoupon = () => {
  const [name, setName] = useState('');
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  return (
    <MainCard>
      <Typography variant="h2" component="h2" mb={2}>
        Chi tiết mã khuyến mãi
      </Typography>

      {/* Coupon Type */}
      <Stack spacing={1}>
        <Stack spacing={1}>
          <Typography variant="subtitle1" component="h2">
            Mã giảm giá
          </Typography>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="percent"
              control={<Radio />}
              label="Tự chọn"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Ngẫu nhiên"
            />
          </RadioGroup>
          <Stack spacing={3}>
            <div>
              <TextField
                sx={{ width: '40%' }}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <Button
                variant="contained"
                color="primary"
                disableElevation
                sx={{ marginLeft: '10px', height: 50 }}
                size="large"
              >
                Tạo mã mới
              </Button>
            </div>
            <TextField
              sx={{ width: '40%' }}
              id="outlined-controlled"
              label="Nhập mã giảm giá"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Stack>
          <Divider />
        </Stack>

        <Stack spacing={1}>
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
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Tiền mặt"
            />
          </RadioGroup>
          <div>
            <FormControl sx={{ width: '40%' }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Phần trăm
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
                label="percent"
                value=""
              />
            </FormControl>
            <FormControl sx={{ width: '40%', marginLeft: '10px' }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Tiền mặt
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={
                  <InputAdornment position="start">VND</InputAdornment>
                }
                label="price"
                value=""
              />
            </FormControl>
          </div>

          <Divider />
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle1" component="h2">
            Hạn sử dụng
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <DesktopDatePicker
                label="Ngày bắt đầu"
                inputFormat="MM/DD/YYYY"
                value=""
                onChange={() => {}}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: '40%' }} />
                )}
              />
              <DesktopDatePicker
                label="Ngày kết thúc"
                inputFormat="MM/DD/YYYY"
                value=""
                onChange={() => {}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ width: '40%', marginLeft: '10px' }}
                  />
                )}
              />
            </div>
          </LocalizationProvider>
          <Divider />
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle1" component="h2">
            Số lượng
          </Typography>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            sx={{ width: '40%' }}
          />

          <Divider />
        </Stack>
      </Stack>
    </MainCard>
  );
};

export default DiscountCoupon;
