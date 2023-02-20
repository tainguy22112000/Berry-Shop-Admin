
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addItem,getAllItems } from '../../../api/firebase/handleData';
// import MainCard from '../../../ui-component/cards/MainCard';
import productDetailsCache from '../../../cache/productDetailsCache';
import { convertDateFireBase } from '../../../helper/date-utils';
// import data
import { clone } from '../../../helper/object-utils';
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
    // createdTime: convertDateFireBase(createOn),
    phone,
    paymentMethods,
    status,
  }
}

const ProductsList = () => {
  const navigate = useNavigate();
  const [datas, setDatas]= useState<any>([]);
  const [pureDatas, setPureDatas] = useState<PureProductData[]>([]);
  const dispatch = useDispatch();

  const selectProductDetail = (data: Record<string, any>) => {
    dispatch( {type: PRODUCT_DETAILS_OPEN, data });
    navigate(`/products/lists/${data.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setDatas(await getAllItems());
    }
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const arrayData: any = [];
    datas.forEach((data: any) => {
      arrayData.push(getPureData(data));
      // productDetailsCache.set(data.id, data);
    });
    setPureDatas(arrayData);
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
