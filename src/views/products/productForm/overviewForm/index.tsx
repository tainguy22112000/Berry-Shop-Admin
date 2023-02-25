import { Add } from '@mui/icons-material';
import { Chip, IconButton, Stack,TextField,Typography } from '@mui/material';
import React, { useState } from 'react';

import MLAndPriceForm from './mlAndPriceForm';
import MoreCombinaForm from './moreCombinaForm';

const overViewProductInit = {
  moreCombina: [],
  mlAndPrice: {},
  totalProductValue: 0,
  mainIngredient: '',
  price: 0,
}

const OverviewForm = (props: any) => {
  const [overviewProduct, setOverviewProduct] = useState(overViewProductInit);
  const [isCompleteOverview, setIsCompleteOverview] = useState(false);
  const [isCompleteMlAndPrice, setIsCompleteMlAndPrice] = useState(false);

  const createOverviewProduct = () => {
    props.createOverviewProduct(overviewProduct);
  }

  const updateMlAndPriceData = (data: any) => {
    setOverviewProduct({
      ...overviewProduct,
      mlAndPrice: data,
    });
    console.log(overviewProduct, 'overviewProduct 1');
  }

  const updateMoreCombinaData = (data: any) => {
    setOverviewProduct({
      ...overviewProduct,
      moreCombina: data,
    })
    console.log(overviewProduct, 'overviewProduct 2');
  }

  const handleChangeInput = (event: any) => {
    const { name, value } = event.target;
    setOverviewProduct({
      ...overviewProduct,
      [name]: value,
    })
  }

  return (
    <Stack spacing={2} direction="column">
      <Stack>
        <TextField
          id="outlined-number"
          label="Main Ingredeient"
          size="small"
          name="mainIngredient"
          onChange={handleChangeInput}
        />
      </Stack>
      <Stack>
        <TextField
          id="outlined-number"
          label="Price"
          size="small"
          name="price"
          onChange={handleChangeInput}
        />
      </Stack>
      <Stack>
        <TextField
          id="outlined-number"
          label="Total Order"
          type="number"
          size="small"
          name="totalOrderValue"
          onChange={handleChangeInput}
        />
      </Stack>
      <Stack spacing={2}>
        <MLAndPriceForm updateMlAndPriceData={updateMlAndPriceData}/>
      </Stack>
      <Stack spacing={2} direction="row" alignContent="center">
        <MoreCombinaForm  updateMoreCombinaData={updateMoreCombinaData}/>
      </Stack>
      <Stack>
        <Chip color="success" />
      </Stack>
    </Stack>
  );
};

export default OverviewForm;
