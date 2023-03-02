/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getEachItem, updateItem } from '../../..//api/firebase/handleData';
import { ItemType } from '../../../api/firebase/dataType';
import { isEqual } from '../../../helper/object-utils';
import { stylesButton } from '../button.styles';
import { ProductAboutsType } from '../productType';
import ProductAbouts from './ProductAbouts';
import ProductImagesCarousel from './ProductImagesCarousel';
import ProductOverview from './ProductOverview';

const ProductDetails = () => {
  const { id: productId } = useParams();
  const [productDetails, setProductDetails] = useState<any>({});
  const [updateProductDetailsData, setUpdateProductDetailsData] = useState<any>(
    {},
  );
  const [overviewProduct, setOverviewProduct] = useState<any>({});
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [labelEditButton, setLabelEditButton] =
    useState<string>('Chế độ chỉnh sửa');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isDataChange, setIsDataChange] = useState<boolean>(false);

  const updateProductDetails = () => {
    updateItem(
      ItemType.PRODUCT,
      updateProductDetailsData,
      updateProductDetailsData.fireBaseId ?? '',
    );
    setIsOpenModal(false);
    setIsEditMode(false);
    setIsDataChange(false);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const updateProductOverview = (data: any) => {
    console.log(data, 'updateProductOverview');
    setUpdateProductDetailsData({
      ...updateProductDetailsData,
      ...data,
    });
  };

  const updateProductAbouts = (data: any) => {
    console.log(data, 'updateProductAbouts');
    setUpdateProductDetailsData({
      ...updateProductDetailsData,
      aboutProduct: data,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = (await getEachItem(
        ItemType.PRODUCT,
        productId ?? '',
      )) as any;
      setProductDetails(data);
      setUpdateProductDetailsData(data);
      setOverviewProduct({
        id: data.id,
        group: data.group,
        mainIngredient: data.mainIngredient,
        price: data.price,
      });
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    if (isEditMode) {
      setLabelEditButton('Chế độ xem');
      return;
    }
    setLabelEditButton('Chế độ chỉnh sửa');
  }, [isEditMode]);

  useEffect(() => {
    if (
      !isEqual(productDetails, updateProductDetailsData) ||
      !isEqual(
        productDetails.aboutProduct,
        updateProductDetailsData.aboutProduct,
      )
    ) {
      setIsDataChange(true);
      return;
    }
    setIsDataChange(false);
  }, [updateProductDetailsData, updateProductDetailsData.aboutProduct]);

  return (
    <Stack spacing={2} direction="column">
      <Button
        variant="contained"
        onClick={toggleEditMode}
        sx={{ width: '20%' }}
      >
        {labelEditButton}
      </Button>
      <Button
        variant="contained"
        onClick={openModal}
        sx={{ width: '20%' }}
        disabled={!isDataChange}
      >
        Lưu thay đổi
      </Button>
      <Paper>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
            {Object.keys(overviewProduct).length > 0 && (
              <ProductOverview
                overviewProduct={overviewProduct}
                isEditMode={isEditMode}
                updateProductOverview={updateProductOverview}
              />
            )}
          </Grid>
          <Grid
            item
            xs
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            {productDetails.aboutProduct && (
              <ProductAbouts
                aboutProduct={productDetails.aboutProduct}
                isEditMode={isEditMode}
                updateProductAbouts={updateProductAbouts}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
      <Dialog
        open={isOpenModal}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Lưu thay đổi</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color="error">
            Bạn có muốn lưu thay đổi của chi tiết sản phẩm này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            style={stylesButton.cancel}
            onClick={closeModal}
          >
            Huỷ bỏ
          </Button>
          <Button
            variant="contained"
            style={stylesButton.button}
            onClick={updateProductDetails}
            autoFocus
          >
            Lưu thay đổi
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default ProductDetails;
