import { Button, Chip, Grid, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';

import {
  capitalizeFirstLetter,
  createRandomId,
} from '../../../helper/string-utls';
import { stylesButton } from '../button.styles';
import AboutForm from './AboutsForm';
import OverviewForm from './OverviewForm';
import PaymentsForm from './PaymentsForm';

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

  const handleCancel = () => {
    console.log('Cancel create product');
  };

  const handleCreate = () => {
    console.log('Create product');
  };
  // useEffect(() => {
  //   props.createNewProductData(productData);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [productData]);

  return (
    <Paper sx={{padding: '10px'}}>
    <Stack spacing={2} direction="column">
      <Stack>
        <Grid container spacing={2}>
          <Grid item xs>
            <Stack spacing={2} direction="column" justifyContent="center">
              <Typography variant="h2">ID: {productData.id}</Typography>
              <TextField
                variant="outlined"
                label="Địa chỉ"
                name="address"
                value={productData.address}
                onChange={handleInputChange}
              />
              <TextField
                variant="outlined"
                label="Tên người nhận"
                name="recipientName"
                value={productData.recipientName}
                onChange={handleInputChange}
              />
              <TextField
                variant="outlined"
                label="Số Điện thoại"
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
      </Stack>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button onClick={handleCreate} variant="contained" sx={stylesButton.button}>
          Tạo Sản Phẩm
        </Button>
        {/* <Button onClick={handleCancel} variant="outlined" sx={stylesButton.cancel}>
          Huỷ bỏ
        </Button> */}
      </Stack>
    </Stack>
    </Paper>
  );
};

export default NewProductForm;
