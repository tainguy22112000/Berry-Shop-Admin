import { Divider, Stack, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { createRandomId } from '../../../../helper/string-utls';

const initOverviewProduct = {
  mainIngredient: '',
  price: 0,
  status: '',
  name: '',
};
const ProductOverviewForm = (props: any) => {
  const [productOverview, setProductOverview] = useState(initOverviewProduct);

  useEffect(() => {
    props.getProductOverviewData(productOverview);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productOverview]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductOverview({
      ...productOverview,
      [name]: value,
    });
  };

  return (
    <Stack spacing={2} direction="column">
      <Stack spacing={2} direction="column">
        <Typography variant="subtitle1">Tên sản phẩm</Typography>
        <Stack spacing={2} direction="row">
          <TextField
            variant="outlined"
            label="Tên"
            name="name"
            value={productOverview.name}
            onChange={handleInputChange}
            sx={{ width: '50%' }}
          />
          <Typography variant="h1">ID: {createRandomId()}</Typography>
        </Stack>
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
