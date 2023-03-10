import {
  Paper,
  Stack,
  Table,
  TableContainer,
  TablePagination,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IOrderTableHeader, Order } from '@/types';

import { ItemType } from '../../../api/firebase/dataType';
import { getAllItems } from '../../../api/firebase/handleData';
import { productTableHeader } from '../../../constants/order/orderTableHeader';
import MainCard from '../../../ui-component/cards/MainCard';
import TableHeader from '../../../ui-component/TableHeader';
import ProductRow from '../ProductRow';
import ProductSnackBar from '../ProductSnackBar';

const ProductLists = () => {
  const [productLists, setProductLists] = useState<any>([]);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
      const newSelected: any = productLists.map((n: any) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openSnackBar = (status: boolean) => {
    setIsOpenSnackBar(status);
  };

  useEffect(() => {
    const fetchData = async () => {
      setProductLists(await getAllItems(ItemType.PRODUCT));
    };
    fetchData().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productLists.length]);
  return (
    <MainCard title="Danh sách sản phẩm">
      <Stack spacing={2} direction="column">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader
              numSelected={10}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={productTableHeader.length}
              headerContent={productTableHeader}
            />
            <ProductRow
              rowProductData={productLists}
              page={page}
              rowsPerPage={rowsPerPage}
              openSnackBar={openSnackBar}
            />
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={productLists.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        <ProductSnackBar
          isOpenSnackBar={isOpenSnackBar}
          message="Xoá sản phẩm thành công"
          status="success"
          position={{ vertical: 'top', horizontal: 'center' }}
        />
      </Stack>
    </MainCard>
  );
};

export default ProductLists;
