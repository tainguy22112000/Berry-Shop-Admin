import { Button, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';

import { ItemType } from '../../../api/firebase/dataType';
import { addItem } from '../../../api/firebase/handleData';
import { stylesButton } from '../button.styles';
import ProductAboutsForm from './ProductAboutsForm';
import ProductMlAndPriceForm from './ProductMlAndPriceForm';
import ProductMoreCombinaForm from './ProductMoreCombinaForm';
import ProductOverviewForm from './ProductOverviewForm';

const ProductFormUpdate = () => {
  const [productData, setProductData] = useState({});
  const getProductOverviewData = (data: any) => {
    console.log(data, 'getProductOverviewData');
    setProductData({
      ...productData,
      ...data,
    });
  };
  const getProductAboutData = (data: any) => {
    console.log(data, 'getProductAboutData');
    setProductData({
      ...productData,
      aboutProduct: data,
    });
  };
  const getProductMlAndPriceData = (data: any) => {
    console.log(data, 'getProductMlAndPriceData');
    setProductData({
      ...productData,
      mlAndPrice: data,
    });
  };
  const getProductMoreCombinaData = (data: any) => {
    console.log(data, 'getProductMoreCombinaData');
    setProductData({
      ...productData,
      moreCombina: data,
    });
  };

  const createNewProduct = () => {
    addItem(ItemType.PRODUCT, productData);
  };

  return (
    <Paper sx={{ padding: '10px' }}>
      <Stack spacing={2} direction="column">
        <ProductOverviewForm getProductOverviewData={getProductOverviewData} />
        <ProductAboutsForm getProductAboutData={getProductAboutData} />
        <ProductMlAndPriceForm
          getProductMlAndPriceData={getProductMlAndPriceData}
        />
        <ProductMoreCombinaForm
          getProductMoreCombinaData={getProductMoreCombinaData}
        />
      </Stack>
      <Stack>
        <Button onClick={createNewProduct} style={stylesButton.button}>
          Tạo sản phẩm mới
        </Button>
      </Stack>
    </Paper>
  );
};

export default ProductFormUpdate;
