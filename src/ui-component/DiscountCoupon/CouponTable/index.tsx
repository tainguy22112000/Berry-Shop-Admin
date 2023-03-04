import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableContainer,
  TablePagination,
} from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IUserTableHeader, Order } from '@/types';

import { ItemType } from '../../../api/firebase/dataType';
import { getAllItems } from '../../../api/firebase/handleData';
import { couponTableHeader } from '../../../constants/coupon/couponTableHeader';
import { rowUserData } from '../../../constants/user/rowUserData';
import TableHeader from '../../../ui-component/TableHeader';
import CouponTableRow from '../CouponTableRow';
import CouponToolbar from '../CouponToolbar';

export const CouponTable = () => {
  const open =
    useSelector(({ couponData }) => couponData.openCreateModal) ?? false;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [discountData, setDiscountData] = useState<any>([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = React.useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IUserTableHeader,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected: any = rowUserData.map((n) => n.firstName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  useEffect(() => {
    setLoading(true);
    const fetchDiscountData = async () => {
      const data = await getAllItems(ItemType.DISCOUNT);
      data && setDiscountData(data);
    };
    fetchDiscountData().catch(console.error);
    setLoading(false);
  }, [open]);

  return (
    <Stack spacing={2}>
      <CouponToolbar />
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table
              sx={{
                minWidth: 750,
              }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHeader
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={couponTableHeader.length}
                headerContent={couponTableHeader}
              />
              {loading ? (
                <Box
                  height={200}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress
                    color="secondary"
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  />
                </Box>
              ) : (
                <CouponTableRow
                  rowCouponData={discountData}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  loading={loading}
                />
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={discountData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Stack>
  );
};

export default CouponTable;
