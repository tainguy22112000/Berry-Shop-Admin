import { ArrowBack } from '@mui/icons-material';
import { IconButton, Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { ItemType } from '../../../api/firebase/dataType';
import { getEachItem } from '../../../api/firebase/handleData';
import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../../../constants/routes';
import { setProductOrderDetails } from '../../../store/product/productOrder.action';
import MainCard from '../../../ui-component/cards/MainCard';
import { ProductAboutsType } from '../productType';
import CustomerInfos from './CustomerInfos';
import ProductInfos from './ProductInfos';

const ProductOrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const [customerInfos, setCustomerInfos] = useState<any>({});
  const [productInfos, setProductInfos] = useState<any>({});
  const [orderInfos, setOrderInfos] = useState<any>({});
  const selector = useSelector((state: any) => state.productOrderData);

  const getCustomerDetail = (orderInfos: any) => {
    const {
      address,
      phone,
      recipientName,
      paymentMethod,
      createOn,
      id,
      paymentMethods,
      deliveryTime,
      note,
      receivedDate,
      receivedTime,
      status,
    } = orderInfos;
    setCustomerInfos({
      address,
      phone,
      recipientName,
      paymentMethod,
      createOn,
      id,
      paymentMethods,
      deliveryTime,
      note,
      receivedDate,
      receivedTime,
      status,
    });
  };

  const getProductDetails = (orderInfos: any) => {
    const { totalOrderValue, productList, totalProductList } = orderInfos;
    setProductInfos({
      totalOrderValue,
      productList,
      totalProductList,
    });
  };

  const backToProductOrderList = () => {
    navigate(`${PRODUCTS_PAGE_ROUTER}/${PRODUCTS_PATH.ProductOrderList}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(selector.productDetails).length === 0) {
        const data = (await getEachItem(
          ItemType.ORDERS,
          // @ts-ignore
          productId,
        )) as ProductAboutsType;
        setOrderInfos(data);
        dispatch(setProductOrderDetails(data));
        return;
      }
      setOrderInfos(selector.productDetails);
    };
    fetchData();
    getCustomerDetail(orderInfos);
    getProductDetails(orderInfos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderInfos]);

  return (
    <Stack spacing={2} direction="column">
      <Stack spacing={2}>
        <IconButton
          color="primary"
          sx={{ backgroundColor: 'white', width: '40px', height: '40px' }}
          onClick={backToProductOrderList}
        >
          <ArrowBack />
        </IconButton>
      </Stack>
      <Paper>
        <MainCard title="Chi tiết đơn hàng">
          <Stack spacing={2} direction="column">
            <Stack spacing={2}>
              {customerInfos && <CustomerInfos customerInfos={customerInfos} />}
            </Stack>
            <Stack spacing={2}>
              {productInfos && <ProductInfos productInfos={productInfos} />}
            </Stack>
          </Stack>
        </MainCard>
      </Paper>
    </Stack>
  );
};

export default ProductOrderDetails;
