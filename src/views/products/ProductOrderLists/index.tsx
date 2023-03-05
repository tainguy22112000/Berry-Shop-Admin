import {
  Paper,
  Stack,
  Table,
  TableContainer,
  TablePagination,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { IOrderTableHeader, IRowOrderDataProps, Order } from '@/types';

import { ItemType } from '../../../api/firebase/dataType';
import { getAllItems } from '../../../api/firebase/handleData';
import { orderTableHeader } from '../../../constants/order/orderTableHeader';
import MainCard from '../../../ui-component/cards/MainCard';
import TableHeader from '../../../ui-component/TableHeader';
import ProductOrderRow from '../ProductOrderRow';
import ProductSnackBar from '../ProductSnackBar';

const ProductsList = () => {
  const [pureDatas, setPureDatas] = useState<IRowOrderDataProps[]>([]);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('recipientName');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IOrderTableHeader,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: any = pureDatas.map((n) => n.recipientName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openSnackBar = (status: boolean) => {
    setIsOpenSnackBar(status);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllItems(ItemType.ORDERS);
      data && setPureDatas(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <MainCard title="Danh sách đơn hàng">
      <Stack spacing={2} direction="column">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader
              numSelected={10}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={orderTableHeader.length}
              headerContent={orderTableHeader}
            />
            <ProductOrderRow
              rowOrderData={pureDatas}
              page={page}
              rowsPerPage={rowsPerPage}
              openSnackBar={openSnackBar}
            />
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={pureDatas.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Stack>
      <ProductSnackBar
        isOpenSnackBar={isOpenSnackBar}
        message="Xoá sản phẩm thành công"
        status="success"
        position={{ vertical: 'top', horizontal: 'center' }}
      />
    </MainCard>
  );
};

export default ProductsList;
