import { Divider, Paper, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { productDetailTest } from '../../../../api/firebase/productList';

const ManualComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(
    `${productDetailTest.rickText.userManual}`,
  );
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = content;
    }
  }, [contentRef.current, content]);
  return <div ref={contentRef}></div>;
};

const ProductOverview = () => {
  const { id, mainIngredient, price } = productDetailTest;
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
      {/* <Stack direction="column">
        <Stack>
          <Typography variant="h5">Hướng dẫn sử dụng</Typography>
        </Stack>
        <Stack><ManualComponent /></Stack>
      </Stack> */}
      {/* <Divider /> */}
    </Paper>
  );
};

export default ProductOverview;
