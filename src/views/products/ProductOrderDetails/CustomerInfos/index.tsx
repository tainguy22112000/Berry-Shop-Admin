  import { AccountBox, Email, LocalPhone } from '@mui/icons-material';
  import {
    Avatar,
    Box,
    Chip,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
  } from '@mui/material';
  import React, { useEffect, useState } from 'react';

  import { convertDateFireBase } from '../../../../helper/date-utils';
  convertDateFireBase;
  const CustomerInfos = (props: any) => {
    const [customerInfos, setCustomerInfos] = useState<any>({});
    const getColorChip = (status: string) => {
      switch (status) {
        case 'paymenting':
          return 'warning';
        case 'processing':
          return 'default';
        default:
          return 'success';
      }
    };

    const getPayments = (status: string) => {
      switch (status) {
        case 'paymenting':
          return 'Đang thanh toán';
        case 'processing':
          return 'Đang xử lý';
        default:
          return 'Đã giao hàng';
      }
    };

    useEffect(() => {
      setCustomerInfos(props.customerInfos);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.customerInfos]);
    return (
      <Paper sx={{ padding: '20px' }}>
        <Stack spacing={2} direction="column">
          <Stack>
            <Grid container justifyContent="space-between">
              <Typography variant="h3">ID: {customerInfos.id}</Typography>
              {customerInfos.createOn && (
                <Typography variant="h3">
                  Đặt hàng lúc {convertDateFireBase(customerInfos.createOn)}
                </Typography>
              )}
            </Grid>
          </Stack>
          <Stack direction="row" spacing={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccountBox />
              <Typography variant="h4">{customerInfos.recipientName}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocalPhone />
              <Typography variant="h4">{customerInfos.phone}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Email />
              <Typography variant="h4">Email</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack>
            <Grid container justifyContent="space-between">
              <Stack direction="column">
                <Stack>
                  <Typography variant="h5">Phương thức thanh toán</Typography>
                </Stack>
                <Stack>{customerInfos.paymentMethods}</Stack>
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Stack>
                  <Typography variant="h5">Trạng thái</Typography>
                </Stack>
                <Stack>
                  <Chip
                    color={getColorChip(customerInfos.status)}
                    label={getPayments(customerInfos.status)}
                  ></Chip>
                </Stack>
              </Stack>
              <Stack direction="column">
                <Stack>
                  <Typography variant="h5">Ghi chú</Typography>
                </Stack>
                <Stack> {customerInfos.note}</Stack>
              </Stack>
            </Grid>
          </Stack>
          <Divider />
          <Stack>
            <Grid container justifyContent="space-between">
              <Stack direction="column">
                <Stack>
                  <Typography variant="h5">Thời gian vận chuyển</Typography>
                </Stack>
                <Stack>
                  {customerInfos.deliveryTime}
                </Stack>
              </Stack>
              <Stack direction="column">
                <Stack>
                  <Typography variant="h5">Thời gian nhận hàng</Typography>
                </Stack>
                <Stack>
                  Ngày nhận: {customerInfos.receivedDate}
                </Stack>
                <Stack>
                  Giờ nhận: {customerInfos.receivedTime}
                </Stack>
              </Stack>
            </Grid>
          </Stack>
        </Stack>
        <Divider />
      </Paper>
    );
  };

  export default CustomerInfos;
