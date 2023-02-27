import {
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ItemType } from '../../../api/firebase/dataType';
import { getAllItems } from '../../../api/firebase/handleData';
// import { ReactComponentElement as MoMoIcon } from '../../../assets/images/icons/momo.svg';
// import MoMoIcon from '../../../assets/images/icons/momo.svg'
import { convertDateFireBase } from '../../../helper/date-utils';
import { clone } from '../../../helper/object-utils';
import { PRODUCT_DETAILS_OPEN } from '../../../store/actions';

// const MoMoIcon = '../../../assets/images/icons/momo.svg';
type ProductList = {};

// type ProductDetail = {
//   address: string;
//   createOn: any;
//   deliveryTime: any;
//   note: string;
//   paymentMethods: string;
//   phone: string;
//   productList: ProductList;
//   recipientName: string;
//   status: boolean;
// };

type PureProductData = {
  id: string | number;
  address: string;
  createdTime: any;
  paymentMethods: string;
  phone: string;
  recipientName: string;
  status: string;
};

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
  };
};

const convertStatus = (status: string) => {
  switch(status) {
    case 'paymenting': 
      return 'Đang thanh toán';
    case 'processing': 
      return 'Đang xử lý';
    default: 
      return 'Đang chờ giao hàng';
  }
}

const ProductsList = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<any>([]);
  const [pureDatas, setPureDatas] = useState<PureProductData[]>([]);
  const dispatch = useDispatch();

  const selectProductDetail = (data: Record<string, any>) => {
    dispatch({ type: PRODUCT_DETAILS_OPEN, data });
    navigate(`/products/order-lists/${data.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setDatas(await getAllItems(ItemType.ORDERS));
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const arrayData: any = [];
    datas.forEach((data: any) => {
      arrayData.push(getPureData(data));
    });
    setPureDatas(arrayData);
  }, [datas]);

  return (
    <Stack spacing={2} direction="column">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên Khách hàng</TableCell>
              <TableCell align="center">Địa chỉ</TableCell>
              <TableCell align="center" sx={{minWidth: '150px'}}>Số Điện thoại</TableCell>
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Phương thức thanh toán</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pureDatas &&
              pureDatas.map((pureData: PureProductData, index: number) => (
                <TableRow
                  hover
                  role="checkbox"
                  key={index}
                  onClick={() => selectProductDetail(datas[index])}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{fontWeight: 'bold'}}>
                    {pureData.recipientName}
                  </TableCell>
                  <TableCell align="center" sx={{minWidth: '150px'}}>{pureData.address}</TableCell>
                  <TableCell align="center">{pureData.phone}</TableCell>
                  <TableCell align="center">{pureData.createdTime}</TableCell>
                  <TableCell align="center">
                    <Chip color={pureData.status === 'paymenting' ? 'warning' : 'success'} variant="outlined" label={convertStatus(pureData.status)} />
                  </TableCell>
                  <TableCell align="center">{pureData.paymentMethods}
                     {/* <img src={MoMoIcon} alt="google" width={16} height={16} /> */}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ProductsList;
