import { Box, Paper, Table, TableContainer } from '@mui/material';
import * as React from 'react';

import { IOrderTableHeader, Order } from '@/types';

import { rowOrderData } from '../../../constants/order/rowOrderData';
import {
  OrderTableHeader,
  OrderTablePagination,
  OrderTableRow,
  OrderTableToolbar,
} from '../../../ui-component/OrderList';

export const OrderList = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('id');
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
      const newSelected: any = rowOrderData.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <OrderTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <OrderTableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rowOrderData.length}
            />
            <OrderTableRow rowOrderData={rowOrderData} />
          </Table>
        </TableContainer>
        <OrderTablePagination total={rowOrderData.length} />
      </Paper>
    </Box>
  );
};

export default OrderList;
