import { Add } from '@mui/icons-material';
import { Chip, IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import MLAndPriceForm from './mlAndPriceForm';
import MoreCombinaForm from './moreCombinaForm';

const overViewProductInit = {
  moreCombina: [],
  mlAndPrice: {},
  totalProductValue: 0,
  mainIngredient: '',
  price: 0,
};

const OverviewForm = (props: any) => {
  const [overviewProduct, setOverviewProduct] = useState(overViewProductInit);
  // const [isCompleteOverview, setIsCompleteOverview] = useState(false);
  // const [isCompleteMlAndPrice, setIsCompleteMlAndPrice] = useState(false);
  // const [isCompleteMoreCombina, setIsCompleteMoreCombina] = useState(false);

  const updateMlAndPriceData = (input: any) => {
    if (input.isConfirm) {
      setOverviewProduct({
        ...overviewProduct,
        mlAndPrice: input.data,
      });
    }
  };

  const updateMoreCombinaData = (input: any) => {
    if (input.isConfirm) {
      setOverviewProduct({
        ...overviewProduct,
        moreCombina: input.data,
      });
    }
  };

  const handleChangeInput = (event: any) => {
    const { name, value } = event.target;
    setOverviewProduct({
      ...overviewProduct,
      [name]: value,
    });
  };

  useEffect(() => {
    props.createOverviewProduct(overviewProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overviewProduct]);

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
        <MLAndPriceForm updateMlAndPriceData={updateMlAndPriceData} />
      </Stack>
      <Stack spacing={2} direction="row" alignContent="center">
        <MoreCombinaForm updateMoreCombinaData={updateMoreCombinaData} />
      </Stack>
      <Stack>
        <Chip color="success" />
      </Stack>
    </Stack>
  );
};

export default OverviewForm;
