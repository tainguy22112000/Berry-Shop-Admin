import { Checkbox, Divider, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const DiscountCoupon = () => {
  const [name, setName] = useState('');
  return (
    <MainCard>
      <Typography variant="h2" component="h2" mb={2}>
        Chi tiết
      </Typography>

      <Stack spacing={1}>
        <Stack>
          <Typography variant="subtitle1" component="h2">
            Chọn loại khuyến mãi
          </Typography>
          <FormGroup row>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Mã tự nhập" />
            <FormControlLabel control={<Checkbox />} label="Mã " />
          </FormGroup>
          <Divider />
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle1" component="h2">
            Nhập mã khuyến mãi
          </Typography>

          <TextField
            sx={{ width: 500 }}
            id="outlined-controlled"
            label="Mã giảm giá"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Divider />
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle1" component="h2">
            Mã giảm giá
          </Typography>

          <TextField
            sx={{ width: 500 }}
            id="outlined-controlled"
            label="Mã giảm giá"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Divider />
        </Stack>
      </Stack>
    </MainCard>
  );
};

export default DiscountCoupon;
