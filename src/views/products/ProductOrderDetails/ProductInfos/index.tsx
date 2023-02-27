import { Divider, Grid, Paper, Stack, Typography } from '@mui/material';
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
  return (
    <Paper sx={{ padding: '20px' }}>
      <Stack spacing={2} direction="column">
        <Stack>
          <Grid container justifyContent="space-between" sx={{overflowX: 'auto'}}>
            <Stack direction="column" flexGrow={1}>
              <Stack>
                <Typography variant="h5">Danh sách sản phẩm</Typography>
              </Stack>
              <Stack>
                {productList && (<ProductListTable productList={productList}/>)}
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
