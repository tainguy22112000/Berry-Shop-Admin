import { Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ItemType } from '../../../api/firebase/dataType';
import { getEachItem } from '../../../api/firebase/handleData';
import { setProductOrderDetails } from '../../../store/product/productOrder.action';
import MainCard from '../../../ui-component/cards/MainCard';
import { ProductAboutsType } from '../productType';
import CustomerInfos from './CustomerInfos';
import ProductInfos from './ProductInfos';

const ProductOrderDetails = () => {
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
  );
};

export default ProductOrderDetails;
