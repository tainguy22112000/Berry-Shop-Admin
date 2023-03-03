import { Button, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';

import { ItemType } from '../../../api/firebase/dataType';
import { addItem } from '../../../api/firebase/handleData';
import { stylesButton } from '../button.styles';
import ProductSnackBar from '../ProductSnackBar';
import ProductAboutsForm from './ProductAboutsForm';
import ProductMlAndPriceForm from './ProductMlAndPriceForm';
import ProductMoreCombinaForm from './ProductMoreCombinaForm';
import ProductOverviewForm from './ProductOverviewForm';

const ProductFormUpdate = () => {
  const [productData, setProductData] = useState({});
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);
  const getProductOverviewData = (data: any) => {
    setProductData({
      ...productData,
      ...data,
    });
  };
  const getProductAboutData = (data: any) => {
    setProductData({
      ...productData,
      aboutProduct: data,
    });
  };
  const getProductMlAndPriceData = (data: any) => {
    setProductData({
      ...productData,
      mlAndPrice: data,
    });
  };
  const getProductMoreCombinaData = (data: any) => {
    setProductData({
      ...productData,
      moreCombina: data,
    });
  };

  const createNewProduct = () => {
    addItem(ItemType.PRODUCT, productData);
    setIsOpenSnackBar(true);
    setTimeout(() => {
      setIsOpenSnackBar(false);
    }, 3000);

  };

  return (
    <Paper sx={{ padding: '10px' }}>
      <Stack spacing={2} direction="column">
        <ProductOverviewForm getProductOverviewData={getProductOverviewData} />
        <ProductAboutsForm getProductAboutData={getProductAboutData} />
        <ProductMlAndPriceForm getProductMlAndPriceData={getProductMlAndPriceData} />
        <ProductMoreCombinaForm getProductMoreCombinaData={getProductMoreCombinaData} />
      </Stack>
      <Stack>
        <Button onClick={createNewProduct} style={stylesButton.button}>
          Tạo sản phẩm mới
        </Button>
      </Stack>
      <ProductSnackBar 
        isOpenSnackBar={isOpenSnackBar}
        position={{vertical: 'top', horizontal: 'center'}}
        status="success"
        message='Thêm sản phẩm thành công'
      />
    </Paper>
  );
};

export default ProductFormUpdate;
