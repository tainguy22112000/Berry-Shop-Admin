import { Divider, Paper, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { productDetailTest } from '../../../../api/firebase/productList';
const { group, id, mainIngredient, price } = productDetailTest;
const ProductOverview = () => {
  const [overview, setOverview] = useState<any>();
  // useEffect(() => {
  //   setOverview({
  //     group,
  //     id,
  //     mainIngredient,
  //     price,
  //   });
  //   console.log(overview, 'overview');
  // }, [overview]);
  return (
    <Paper>
      <Stack spacing={2}>
        <Stack>
          <Typography variant="h5">ID: {productDetailTest.id}</Typography>
        </Stack>
        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Đánh giá</Typography>
          </Stack>
          <Rating name="read-only" value={5} readOnly />
        </Stack>
        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Nhóm</Typography>
          </Stack>
          <Stack>{productDetailTest.group}</Stack>
        </Stack>
        <Divider />
        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Nguyên liệu chính</Typography>
          </Stack>
          <Stack>{productDetailTest.mainIngredient}</Stack>
        </Stack>
        <Divider />
        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Giá</Typography>
          </Stack>
          <Stack>{productDetailTest.price}</Stack>
        </Stack>
        <Divider />
      </Stack>
    </Paper>
  );
};

export default ProductOverview;
