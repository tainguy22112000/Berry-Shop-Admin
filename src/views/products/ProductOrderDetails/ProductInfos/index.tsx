import { Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';

import ProductListTable from './ProductListTable';
const ProductInfos = (props: any) => {
  const [productInfos, setProductInfos] = useState<any>({});
  const [productList, setProductList] = useState<any>();
  useEffect(() => {
    props.productInfos && setProductInfos(props.productInfos);
    if (props.productInfos.productList) {
      setProductList(props.productInfos.productList.productList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productInfos]);
  console.log('pppp123', productInfos.productList);
  return (
    <Paper
      sx={{
        padding: '20px',
        border: '1px solid rgb(238, 238, 238)',
        borderRadius: 2,
      }}
    >
      <Stack spacing={2} direction="column">
        <Stack>
          <Grid
            container
            justifyContent="space-between"
            sx={{ overflowX: 'auto' }}
          >
            <Stack direction="column" flexGrow={1}>
              <Stack>
                <Typography variant="h4">Danh sách sản phẩm</Typography>
              </Stack>
              <Stack>
                {productList && <ProductListTable productList={productList} />}
              </Stack>
              <Stack>
                <Paper
                  sx={{
                    backgroundColor: blue[50],
                    minHeight: 100,
                    padding: '20px',
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Stack spacing={1} minWidth={200}>
                      <Typography variant="h5">Thành tiền : </Typography>
                      <Typography variant="h5">Mã giảm giá : </Typography>
                      <Typography variant="h5">Tổng cộng : </Typography>
                    </Stack>

                    <Stack spacing={1} alignItems="center" minWidth={80}>
                      <Typography variant="h5">
                        {productInfos?.productList?.totalOrderValue ?? ''}
                      </Typography>
                      <Typography variant="h5">0 % </Typography>
                      <Typography variant="h5">
                        {productInfos?.productList?.totalOrderValue ?? ''}
                      </Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Stack>
      <Divider />
    </Paper>
  );
};

export default ProductInfos;
