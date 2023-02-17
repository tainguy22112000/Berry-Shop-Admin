import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { IconFilter, IconSearch, IconTrash } from '@tabler/icons';
import * as React from 'react';

const OrderTableToolbar = ({ numSelected }: { numSelected: number }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      <FormControl sx={{ flex: '1 1 30%', width: '20%' }} size="small">
        <InputLabel htmlFor="outlined-adornment-amount">Tìm kiếm</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          endAdornment={
            <InputAdornment position="start">
              <IconButton aria-label="copy" size="small" color="primary">
                <IconSearch />
              </IconButton>
            </InputAdornment>
          }
          label="percent"
          value=""
          sx={{ width: '30%' }}
        />
      </FormControl>
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : null}
      <Tooltip title="Delete">
        <IconButton>
          <IconTrash />
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter list">
        <IconButton>
          <IconFilter />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export default OrderTableToolbar;
