import { Button, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { addItem, getEachItem } from '../../..//api/firebase/handleData';
import { ItemType } from '../../../api/firebase/dataType';
import { productDetailTest } from '../../../api/firebase/productList';
import { ProductAboutsType } from '../productType';
// import {productDetailTest} from '../../../api/firebase/productList';
import ProductAbouts from './ProductAbouts';
import ProductImagesCarousel from './ProductImagesCarousel';
import ProductOverview from './ProductOverview';

const ProductDetails = () => {
  const { id: productId } = useParams();
  const [productDetails, setProductDetails] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      // if (Object.keys(selector.productDetails).length === 0) {
      const data = (await getEachItem(
        ItemType.PRODUCT,
        // @ts-ignore
        productId,
      )) as ProductAboutsType;
      setProductDetails(data);
    };
    fetchData();
    console.log(productDetails, 'productDetails');
  }, []);

  return (
    <Paper>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* {JSON.stringify(productDetails)} */}
        <Grid
          item
          xs={6}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          {productDetails.photo && (
            <ProductImagesCarousel photo={productDetails.photo} />
          )}
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
          {productDetails.aboutProduct && (
            <ProductAbouts aboutProduct={productDetails.aboutProduct} />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
