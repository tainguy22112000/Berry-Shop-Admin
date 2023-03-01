import { Divider, Stack, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { test } from '../../../../api/firebase/productList';
const initOverviewProduct = {
  mainIngredient: '',
  price: 0,
  status: 'designing',
  name: '',
};
const ProductOverviewForm = () => {
  const [productOverview, setProductOverview] = useState(initOverviewProduct);
  useEffect(() => {
    console.log(test, 'test');
  }, []);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, 'e.target.value');
  };
  return (
    <Stack spacing={2} direction="column">
      <Stack spacing={2} direction="column">
        <Typography variant="subtitle1">Tên sản phẩm</Typography>
        <TextField
          variant="outlined"
          label="Tên"
          name="name"
          value={productOverview.name}
          onChange={handleInputChange}
          sx={{ width: '50%' }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <Stack spacing={2} direction="column" sx={{ flexGrow: '1' }}>
          <Typography variant="subtitle1">Nguyên liệu chính</Typography>
          <TextField
            variant="outlined"
            label="Nguyên liệu chính"
            name="mainIngredient"
            value={productOverview.mainIngredient}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
        </Stack>
        <Stack spacing={2} direction="column" sx={{ flexGrow: '1' }}>
          <Typography variant="subtitle1">Giá thành</Typography>
          <TextField
            variant="outlined"
            label="Giá thành"
            name="price"
            type="number"
            value={productOverview.price}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
        </Stack>
        <Stack spacing={2} direction="column" sx={{ flexGrow: '1' }}>
          <Typography variant="subtitle1">Trạng thái</Typography>
          <TextField
            variant="outlined"
            label="Trạng thái"
            name="main"
            value={productOverview.status}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default ProductOverviewForm;
