import {
  Checkbox,
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

import { IOrderTableHeader, Order } from '@/types';

import { ItemType } from '../../../api/firebase/dataType';
import { getAllItems } from '../../../api/firebase/handleData';
import { orderTableHeader } from '../../../constants/order/orderTableHeader';
// import { ReactComponentElement as MoMoIcon } from '../../../assets/images/icons/momo.svg';
// import MoMoIcon from '../../../assets/images/icons/momo.svg'
import { convertDateFireBase } from '../../../helper/date-utils';
import { clone } from '../../../helper/object-utils';
import { PRODUCT_ORDER_DETAILS_OPEN } from '../../../store/actions';
import TableHeader from '../../../ui-component/TableHeader';


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
  switch (status) {
    case 'paymenting':
      return 'Đang thanh toán';
    case 'processing':
      return 'Đang xử lý';
    default:
      return 'Đang chờ giao hàng';
  }
};

const ProductsList = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<any>([]);
  const [pureDatas, setPureDatas] = useState<PureProductData[]>([]);
  const dispatch = useDispatch();

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('recipientName');
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IOrderTableHeader,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: any = pureDatas.map((n) => n.recipientName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const selectProductDetail = (data: Record<string, any>) => {
    dispatch({ type: PRODUCT_ORDER_DETAILS_OPEN, data });
    navigate(`/products/order-lists/${data.fireBaseId}`);
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
          {/* <TableHead>
            <TableRow>
              <TableCell>Tên Khách hàng</TableCell>
              <TableCell align="center">Địa chỉ</TableCell>
              <TableCell align="center" sx={{ minWidth: '150px' }}>
                Số Điện thoại
              </TableCell>
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Phương thức thanh toán</TableCell>
            </TableRow>
          </TableHead> */}
          <TableHeader
            numSelected={10}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={orderTableHeader.length}
            headerContent={orderTableHeader}
          />
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
                  <TableCell align="center">
                    <Checkbox color="primary" checked={false} />
                  </TableCell>

                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {pureData.recipientName}
                  </TableCell>
                  <TableCell align="left" sx={{ maxWidth: '200px' }}>
                    {pureData.address}
                  </TableCell>
                  <TableCell align="center">{pureData.phone}</TableCell>
                  <TableCell align="center">{pureData.createdTime}</TableCell>
                  <TableCell align="center">
                    <Chip
                      color={
                        pureData.status === 'paymenting' ? 'warning' : 'success'
                      }
                      variant="outlined"
                      label={convertStatus(pureData.status)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {pureData.paymentMethods}
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
