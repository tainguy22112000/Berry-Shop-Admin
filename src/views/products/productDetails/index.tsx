import { Grid, Paper } from '@mui/material';
import React, { useEffect } from 'react';

import { productDetailTest } from '../../../api/firebase/productList';
import ProductAbouts from './ProductAbouts';
import ProductImagesCarousel from './ProductImagesCarousel';
import ProductOverview from './ProductOverview';

const ProductDetails = () => {
  useEffect(() => {
    console.log(productDetailTest, 'productDetailTest');
  }, []);
  return (
    <Paper>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={6}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <ProductImagesCarousel />
        </Grid>
        <Grid item xs={6}>
          <ProductOverview />
        </Grid>
        <Grid
          item
          xs
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <ProductAbouts />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
