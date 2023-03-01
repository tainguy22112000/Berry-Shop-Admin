import { Paper } from "@mui/material";
import React from "react";

import ProductAboutsForm from "./ProductAboutsForm";
import ProductMlAndPriceForm from "./ProductMlAndPriceForm";
import ProductMoreCombinaForm from "./ProductMoreCombinaForm";
import ProductOverviewForm from "./ProductOverviewForm";

const ProductFormUpdate = () => {
  return (
    <Paper sx={{padding: '10px'}}>
      <ProductOverviewForm />
      <ProductAboutsForm />
      <ProductMlAndPriceForm />
      <ProductMoreCombinaForm />
    </Paper>
  )
}

export default ProductFormUpdate;