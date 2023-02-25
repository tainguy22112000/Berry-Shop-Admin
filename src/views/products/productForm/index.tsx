import { Chip, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

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
      },
    ],
    totalOrderValue: 0,
    totalProductList: 1,
  },
};

const NewProductForm = (props: any) => {
  const [productData, setProductData] = useState(initialValues);
 
  const createNewProductData = () => {
    props.createNewProductData(productData);
  }

  const createAboutProduct = (aboutProductList: any) => {
    console.log(aboutProductList, 'aboutProductList');
  };
  
  const createOverviewProduct = (overviewProduct: any) => {
    console.log(createOverviewProduct, 'createOverviewProduct');
  }

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
          <Chip label={capitalizeFirstLetter(productData.status)} color="warning" />
        </Stack>
      </Grid>
      <Grid item xs>
        <Stack spacing={2} direction="column" justifyContent="center">
          <AboutForm createAboutProduct={createAboutProduct}/>
        </Stack>
        <Stack spacing={2} direction="column" justifyContent="center">
          <OverviewForm createOverviewProduct={createOverviewProduct}/>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewProductForm;
