import { Paper } from "@mui/material";
import React, { useState } from "react";

import ProductAboutsForm from "./ProductAboutsForm";
import ProductMlAndPriceForm from "./ProductMlAndPriceForm";
import ProductMoreCombinaForm from "./ProductMoreCombinaForm";
import ProductOverviewForm from "./ProductOverviewForm";

const ProductFormUpdate = () => {
  const [productData, setProductData] = useState({});
  const getProductOverviewData = (data: any) => {
    console.log(data, 'getProductOverviewData');
  }
  const getProductAboutData = (data: any) => {
    console.log(data, 'getProductAboutData');
  }
  const getProductMlAndPriceData = (data: any) => {
    console.log(data, 'getProductMlAndPriceData');
  }
  const getProductMoreCombinaData = (data: any) => {
    console.log(data, 'getProductMoreCombinaData');
  }

  return (
    <Paper sx={{padding: '10px'}}>
      <ProductOverviewForm getProductOverviewData={getProductOverviewData} />
      <ProductAboutsForm getProductAboutData={getProductAboutData} />
      <ProductMlAndPriceForm getProductMlAndPriceData={getProductMlAndPriceData} />
      <ProductMoreCombinaForm getProductMoreCombinaData={getProductMoreCombinaData} />
    </Paper>
  )
}

export default ProductFormUpdate;