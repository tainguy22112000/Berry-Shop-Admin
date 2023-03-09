/* eslint-disable react-hooks/exhaustive-deps */
import {
  Divider,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

// const ManualComponent = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [content, setContent] = useState(
//     `${productDetailTest.rickText.userManual}`,
//   );
//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.innerHTML = content;
//     }
//   }, [contentRef.current, content]);
//   return <div ref={contentRef}></div>;
// };

const ProductOverview = (props: any) => {
  const [data, setData] = useState(props);
  console.log('data', data);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    setData(props.overviewProduct);
  }, [props.overviewProduct]);

  useEffect(() => {
    props.updateProductOverview(data);
  }, [data]);

  useEffect(() => {}, [props.isEditMode]);

  return (
    <Paper sx={{ padding: '2rem 5rem' }}>
      <Stack spacing={2}>
        <Stack>
          <Typography variant="h5">ID: {data.id}</Typography>
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
          <Stack sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                label="Nhóm"
                name="group"
                value={data.group}
                onChange={handleInputChange}
                sx={{ width: '98%' }}
              />
            ) : (
              data.group
            )}
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Nguyên liệu chính</Typography>
          </Stack>
          <Stack sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                label="Nguyên liệu chính"
                name="mainIngredient"
                value={data.mainIngredient}
                onChange={handleInputChange}
                sx={{ width: '98%' }}
              />
            ) : (
              data.mainIngredient
            )}
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="column">
          <Stack>
            <Typography variant="h5">Giá</Typography>
          </Stack>
          <Stack sx={{ paddingTop: '8px' }}>
            {props.isEditMode ? (
              <TextField
                label="Giá"
                name="price"
                value={data.price}
                type="number"
                onChange={handleInputChange}
                sx={{ width: '98%' }}
              />
            ) : (
              data.price
            )}
          </Stack>
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
