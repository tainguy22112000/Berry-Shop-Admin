import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { IconCheck, IconCopy } from '@tabler/icons';
import * as React from 'react';

import { CouponOptions } from '../../../constants/enum';
import { useCouponCode } from '../../../hooks/useCouponCode';
import { styles } from './index.styles';

const CouponCode = () => {
  const {
    activeCouponOptions,
    copy,
    couponCode,
    couponError,
    handleCopyIcon,
    handleCouponOptionsClick,
    handleRandomCoupon,
    handleTypingCoupon,
  } = useCouponCode();

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" component="h2">
        Mã giảm giá
      </Typography>

      {/* ------------------ Tạo mã ngẫu nhiên ----------------- */}
      <Stack direction="row" spacing={2}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="random"
            control={<Radio sx={styles.radioColor} />}
            checked={!activeCouponOptions}
            label="Ngẫu nhiên"
            onClick={() => handleCouponOptionsClick(CouponOptions.RANDOM)}
            sx={styles.radioWith}
          />
        </RadioGroup>
        <FormControl sx={styles.formWith} variant="outlined">
          <TextField
            id="outlined-adornment-amount"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="copy"
                    size="small"
                    sx={styles.primaryColor}
                    disabled={activeCouponOptions}
                    onClick={handleCopyIcon}
                  >
                    {copy && !activeCouponOptions ? (
                      <IconCheck />
                    ) : (
                      <IconCopy />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            disabled={activeCouponOptions}
            value={!activeCouponOptions ? couponCode : ''}
            autoFocus
            required
            type="text"
          />
        </FormControl>
        <Button
          variant="contained"
          disableElevation
          sx={styles.button}
          size="medium"
          disabled={activeCouponOptions}
          onClick={handleRandomCoupon}
        >
          Tạo mã mới
        </Button>
      </Stack>

      {/*  ---------------------- Tạo mã tự nhập ----------------------- */}
      <Stack direction="row" spacing={2}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="typing"
            control={<Radio sx={styles.radioColor} />}
            checked={activeCouponOptions}
            label="Tự nhập"
            sx={styles.radioWith}
            onClick={() => handleCouponOptionsClick(CouponOptions.TYPING)}
          />
        </RadioGroup>
        <FormControl sx={{ width: '60%' }}>
          <TextField
            id="outlined-adornment-amount"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="copy"
                    size="small"
                    sx={styles.primaryColor}
                    disabled={!activeCouponOptions}
                    onClick={handleCopyIcon}
                  >
                    {copy && activeCouponOptions ? <IconCheck /> : <IconCopy />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            disabled={!activeCouponOptions}
            size="small"
            value={activeCouponOptions ? couponCode : ''}
            required
            onChange={handleTypingCoupon}
            placeholder={
              couponError ? 'Vui lòng nhập mã giảm giá' : 'Nhập mã giảm giá'
            }
            error={couponError}
          />
        </FormControl>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponCode;
