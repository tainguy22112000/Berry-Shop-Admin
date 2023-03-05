import {
  AccountBox,
  AutoMode,
  CoPresent,
  DateRange,
  Email,
  EventNote,
  EventRepeat,
  Home,
  LocalAtm,
  LocalPhone,
  QueryBuilder,
  TextSnippet,
} from '@mui/icons-material';
import { Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { convertDateFireBase } from '../../../../helper/date-utils';
import {
  getColorChip,
  getPayments,
} from '../../../utilities/convertOrderStatus';

const CustomerInfos = (props: any) => {
  const [customerInfos, setCustomerInfos] = useState<any>({});

  useEffect(() => {
    setCustomerInfos(props.customerInfos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.customerInfos]);
  return (
    <Paper
      sx={{
        padding: '20px',
        border: '1px solid rgb(238, 238, 238)',
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>
        <Stack spacing={2}>
          <Grid container justifyContent="space-between">
            <Typography variant="h4">Thông tin khách hàng</Typography>
          </Grid>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AccountBox fontSize="small" />
                <Typography variant="h5">Tên khách hàng :</Typography>
                <Typography variant="body1">
                  {customerInfos.recipientName}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocalPhone fontSize="small" />
                <Typography variant="h5">Số điện thoại : </Typography>
                <Typography variant="body1">{customerInfos.phone}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Home fontSize="small" />
                <Typography variant="h5">Địa chỉ : </Typography>
                <Typography variant="body1">{customerInfos.address}</Typography>
              </Stack>
            </Stack>

            <Stack spacing={1} sx={{ minWidth: 300 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <CoPresent fontSize="small" />
                <Typography variant="h5">ID: </Typography>
                <Typography variant="body1">{customerInfos.id}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <DateRange fontSize="small" />
                <Typography variant="h5">Đặt hàng lúc: </Typography>
                <Typography variant="body1">
                  {convertDateFireBase(customerInfos.createOn)}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" />
                <Typography variant="h5">Email : </Typography>
                <Typography variant="h5"></Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column" spacing={2}>
            <Typography variant="h4">Phương thức thanh toán</Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocalAtm fontSize="small" />
                <Typography variant="h5">Thanh toán qua : </Typography>
                <Typography variant="body1">
                  {customerInfos.paymentMethods}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <AutoMode fontSize="small" />
                <Typography variant="h5">Trạng thái: </Typography>
                <Chip
                  color={getColorChip(customerInfos.status)}
                  label={getPayments(customerInfos.status)}
                  size="small"
                />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextSnippet fontSize="small" />
                <Typography variant="h5">Ghi chú : </Typography>
                <Typography variant="h5">
                  {customerInfos.note ?? 'Trống'}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={2} sx={{ minWidth: 300 }}>
            <Typography variant="h4">Thời gian nhận hàng</Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <EventNote fontSize="small" />
                <Typography variant="h5">Ngày giao hàng : </Typography>
                <Typography variant="body1">
                  {customerInfos.deliveryTime ?? 'Trống'}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EventRepeat fontSize="small" />
                <Typography variant="h5">Ngày nhận: </Typography>
                <Typography variant="body1">
                  {customerInfos.receivedDate}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <QueryBuilder fontSize="small" />
                <Typography variant="h5">Giờ nhận : </Typography>
                <Typography variant="body1">
                  {customerInfos.receivedTime}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CustomerInfos;
