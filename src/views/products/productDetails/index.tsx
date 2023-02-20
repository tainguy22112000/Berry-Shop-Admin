// import MainCard from "@/ui-component/cards/MainCard";
// import MainCard from '../../../ui-component/cards/MainCard';
import { Box, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getEachItem } from '../../../api/firebase/handleData';
import { clone } from '../../../helper/object-utils';
import { PRODUCT_DETAILS_OPEN } from '../../../store/actions';
import ButtonUpdateProduct from '../buttonUpdateProduct';
import ProductAbouts from '../productAbouts';
import ProductOverview from '../productOverviews';
import { ProductAboutsType } from '../productType';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.productData);
  const [productDetail, setProductDetail] = useState<any>({});
  const [aboutProducts, setAboutProducts] = useState<any>([]);
  const [overviewProducts, setOverviewProducts] = useState<any>();
  const { id: productId } = useParams();

  const updateProductAbouts = (input: any) => {
    const { data, index } = input;
    console.log(data, 'data');
    productDetail.productList.productList[0].aboutProduct.forEach(
      (_: any, i: number) => {
        if (i === index) {
          productDetail.productList.productList[0].aboutProduct[i] = {
            ...data,
          };
        }
      },
    );
    setProductDetail({ ...productDetail });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(selector.productDetails).length === 0) {
        // @ts-ignore
        const data = (await getEachItem(productId)) as ProductAboutsType;
        setProductDetail(data);
        dispatch({ type: PRODUCT_DETAILS_OPEN, data });
        return;
      }
      setProductDetail(selector.productDetails);
    };
    fetchData();
    setAboutProducts(productDetail?.productList?.productList[0]?.aboutProduct);
    setOverviewProducts(productDetail?.productList?.productList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productDetail]);

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <ButtonUpdateProduct data={productDetail} id={productId} />
      </Stack>
      <Stack spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          {overviewProducts && <ProductOverview data={overviewProducts} />}
        </Box>
      </Stack>
      <Stack spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 6, md: 8 }}
          >
            {aboutProducts &&
              aboutProducts.map((abProd: ProductAboutsType, index: number) => (
                <Grid item xs={1} sm={2} md={2} key={index}>
                  <ProductAbouts
                    updateProductAbouts={updateProductAbouts}
                    data={abProd}
                    index={index}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Stack>
      {/* <Stack spacing={2}>
        <div>Hello world</div>
      </Stack> */}
    </Stack>
  );
};

export default ProductDetails;
