import { Chip, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';

import {
  capitalizeFirstLetter,
  createRandomId,
} from '../../../helper/string-utls';
import AboutForm from './aboutsForm';
import OverviewForm from './overviewForm';
import PaymentsForm from './paymentsForm';

const initialValues = {
  id: createRandomId(),
  address: '',
  paymentMethod: 'Momo',
  status: 'paymenting',
  recipientName: '',
  phone: '',
  productList: {
    productList: [
      {
        aboutProduct: [],
        mlAndPrice: {},
        moreCombina: [],
        price: 0,
        mainIngredient: '',
      },
    ],
    totalOrderValue: 0,
    totalProductList: 1,
  },
};

const NewProductForm = (props: any) => {
  const [productData, setProductData] = useState(initialValues);

  const createAboutProduct = (aboutProductList: any) => {
    productData.productList.productList[0].aboutProduct = aboutProductList;
    setProductData({
      ...productData,
      productList: {
        ...productData.productList,
        productList: [
          {
            ...productData.productList.productList[0],
            aboutProduct: aboutProductList,
          },
        ],
      },
    });
  };

  const createOverviewProduct = (overviewProduct: any) => {
    const { moreCombina, mlAndPrice, mainIngredient, price, totalOrderValue } =
      overviewProduct;
    setProductData({
      ...productData,
      productList: {
        ...productData.productList,
        productList: [
          {
            ...productData.productList.productList[0],
            moreCombina,
            mlAndPrice,
            mainIngredient,
            price,
          },
        ],
        totalOrderValue,
      },
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const updatePayment = (payment: string) => {
    setProductData({
      ...productData,
      paymentMethod: payment,
    });
  };

  useEffect(() => {
    props.createNewProductData(productData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <Stack spacing={2} direction="column" justifyContent="center">
          <Typography variant="h4">ID: {productData.id}</Typography>
          <TextField
            variant="outlined"
            label="Address"
            name="address"
            value={productData.address}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Recipient Name"
            name="recipientName"
            value={productData.recipientName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Phone"
            name="phone"
            value={productData.phone}
            onChange={handleInputChange}
          />
          <PaymentsForm updatePayment={updatePayment} />
        </Stack>
        <Stack spacing={2}>
          <Chip
            label={capitalizeFirstLetter(productData.status)}
            color="warning"
          />
        </Stack>
      </Grid>
      <Grid item xs>
        <Stack spacing={2} direction="column" justifyContent="center">
          <AboutForm createAboutProduct={createAboutProduct} />
        </Stack>
        <Stack spacing={2} direction="column" justifyContent="center">
          <OverviewForm createOverviewProduct={createOverviewProduct} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewProductForm;
