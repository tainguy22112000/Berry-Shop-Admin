
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import React, { useEffect, useState } from 'react';
import { get } from '../../../api/firebase/getData';
import { clone } from '../../../helper/object-utils';
import { convertDateFireBase } from '../../../helper/date-utils';
import MainCard from '../../../ui-component/cards/MainCard';
// import ProductDetails from '../productDetails';
import productDetailsCache from '../../../cache/productDetailsCache';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_DETAILS_OPEN } from '../../../store/actions';

// ==============================|| SAMPLE PAGE ||============================== //

type ProductList = {

}

type ProductDetail = {
  address: string;
  createOn: any;
  deliveryTime: any;
  note: string;
  paymentMethods: string;
  phone: string;
  productList: ProductList;
  recipientName: string;
  status: boolean;
}

type PureProductData = {
  id: string | number;
  address: string;
  createdTime: any;
  paymentMethods: string;
  phone: string;
  recipientName: string;
  status: boolean;
}

const getPureData = (data: PureProductData) => {
  const cloneData = clone(data);
  const {
    id,
    recipientName,
    address,
    createOn,
    phone,
    paymentMethods,
    status,
  } = cloneData;

  return {
    id,
    recipientName,
    address,
    createdTime: convertDateFireBase(createOn),
    phone,
    paymentMethods,
    status,
  }
}


const ProductsList = () => {
  const [datas, setDatas]= useState<any>([]);
  const [pureDatas, setPureDatas] = useState<PureProductData[]>([]);
  const dispatch = useDispatch();

  const selectProductDetail = (data: Record<string, any>) => {
    dispatch( {type: PRODUCT_DETAILS_OPEN, data });
  }

  // const productData = useSelector((state: any) => state.productData);
  // console.log(productData, 'productData');
  useEffect(() => {
    const fetchData = async () => {
      setDatas(await get());
    }
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const arrayData: any = [];
      datas.forEach((data: any) => {
        arrayData.push(getPureData(data));
        productDetailsCache.set(data.id, data);
      });
      setPureDatas(arrayData);
    }, 1500);
  }, [datas]);

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Address</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Created Time</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Payment Method</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pureDatas && pureDatas.map((pureData: PureProductData, index: number) => (
          <TableRow
            key={index}
            onClick={() => selectProductDetail(datas[index])}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {pureData.recipientName}
            </TableCell>
            <TableCell align="right">{pureData.address}</TableCell>
            <TableCell align="right">{pureData.phone}</TableCell>
            <TableCell align="right">{pureData.createdTime}</TableCell>
            <TableCell align="right">{pureData.status}</TableCell>
            <TableCell align="right">{pureData.paymentMethods}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  );
}

export default ProductsList;
