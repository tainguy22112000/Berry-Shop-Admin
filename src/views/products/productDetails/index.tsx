// import MainCard from "@/ui-component/cards/MainCard";
// import MainCard from '../../../ui-component/cards/MainCard';
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import ProductAbouts from '../productAbouts';
import { ProductAboutsType } from '../productType';
import { Box, Grid } from '@mui/material';

const ProductDetails = () => {
  const selector = useSelector((state: any) => state.productData);
  const [productDetail, setProductDetail] = useState({});
  const [aboutProducts, setAboutProducts] = useState([]);

  useEffect(() => {
    setProductDetail(selector.productDetails);
    setAboutProducts(selector.productDetails?.productList?.productList[0]?.aboutProduct);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 6, md: 8 }}>
        {aboutProducts && aboutProducts.map((abProd: ProductAboutsType, index: number) => (
          <Grid item xs={1} sm={2} md={2} key={index} >
            <ProductAbouts data={abProd}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductDetails;