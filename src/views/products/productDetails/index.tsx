/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getEachItem, updateItem } from '../../..//api/firebase/handleData';
import { ItemType } from '../../../api/firebase/dataType';
import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../../../constants/routes';
import { isEqual } from '../../../helper/object-utils';
import { stylesButton } from '../button.styles';
import ProductModal from '../ProductModal';
import ProductSnackBar from '../ProductSnackBar';
import { ProductAboutsType, ProductOverviewType } from '../productType';
import ProductAbouts from './ProductAbouts';
import ProductImagesCarousel from './ProductImagesCarousel';
import ProductOverview from './ProductOverview';

const ProductDetails = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
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
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);

  const updateProductDetails = () => {
    updateItem(
      ItemType.PRODUCT,
      updateProductDetailsData,
      updateProductDetailsData?.fireBaseId ?? '',
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

  const updateProductOverview = (data: ProductOverviewType) => {
    setUpdateProductDetailsData({
      ...updateProductDetailsData,
      ...data,
    });
  };

  const updateProductAbouts = (data: ProductAboutsType) => {
    setUpdateProductDetailsData({
      ...updateProductDetailsData,
      aboutProduct: data,
    });
  };

  const backToProductList = () => {
    navigate(`${PRODUCTS_PAGE_ROUTER}/${PRODUCTS_PATH.ProductLists}`);
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
        amount: data.amount,
        name: data.name,
        mlAndPrice: data.mlAndPrice,
        moreCombina: data.moreCombina,
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
        productDetails?.aboutProduct,
        updateProductDetailsData?.aboutProduct,
      )
    ) {
      setIsDataChange(true);
      return;
    }
    setIsDataChange(false);
  }, [updateProductDetailsData, updateProductDetailsData.aboutProduct]);

  return (
    <Stack spacing={2} direction="column">
      <Paper sx={{ padding: 5, height: '100%' }}>
        <Stack spacing={4}>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Stack alignItems="center" justifyContent="center">
              <IconButton
                color="primary"
                sx={{ backgroundColor: 'white', width: '40px', height: '40px' }}
                onClick={backToProductList}
              >
                <ArrowBack />
              </IconButton>
            </Stack>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                onClick={toggleEditMode}
                fullWidth
                style={stylesButton.button}
              >
                {labelEditButton}
              </Button>
              <Button
                variant="outlined"
                onClick={openModal}
                disabled={!isDataChange}
              >
                Lưu thay đổi
              </Button>
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" flexGrow={1}>
              <Box sx={{ width: '500px' }}>
                {productDetails.photo && (
                  <ProductImagesCarousel photo={productDetails.photo} />
                )}
              </Box>
              <Box sx={{ with: '50%' }} flexGrow={1}>
                {Object.keys(overviewProduct).length > 0 && (
                  <ProductOverview
                    overviewProduct={overviewProduct}
                    isEditMode={isEditMode}
                    updateProductOverview={updateProductOverview}
                  />
                )}
              </Box>
            </Stack>
            <Box>
              {productDetails.aboutProduct && (
                <ProductAbouts
                  aboutProduct={productDetails.aboutProduct}
                  isEditMode={isEditMode}
                  updateProductAbouts={updateProductAbouts}
                />
              )}
            </Box>
          </Stack>
        </Stack>
      </Paper>
      <ProductSnackBar
        isOpenSnackBar={isOpenSnackBar}
        position={{ vertical: 'top', horizontal: 'center' }}
        status="success"
        message="Chỉnh sửa thành công"
      />
      <ProductModal
        isOpenModal={isOpenModal}
        labelTextContent="Bạn có muốn lưu thay đổi của chi tiết sản phẩm này?"
        labelTitle="Lưu thay đổi"
        labelCancel="Huỷ bỏ"
        labelSucess=" Lưu thay đổi"
        onCancel={closeModal}
        onSucess={updateProductDetails}
      />
    </Stack>
  );
};

export default ProductDetails;
