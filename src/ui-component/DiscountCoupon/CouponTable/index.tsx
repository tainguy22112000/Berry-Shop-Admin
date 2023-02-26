import {
  Box,
  Paper,
  Stack,
  Table,
  TableContainer,
  Typography,
} from '@mui/material';
import * as React from 'react';

import { IUserTableHeader, Order } from '@/types';

import { rowUserData } from '../../../constants/user/rowUserData';
import { userTableHeader } from '../../../constants/user/userTableHeader';
import {
  UserTableHeader,
  UserTablePagination,
  UserTableRow,
  UserTableToolbar,
} from '../../../ui-component/UserProfile/index';

export const CouponTable = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);

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
      const newSelected: any = rowUserData.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" component="h2">
        Danh sách mã giảm giá
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          {/* <UserTableToolbar numSelected={selected.length} /> */}
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <UserTableHeader
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rowUserData.length}
                headerContent={userTableHeader}
              />
              <UserTableRow rowUserData={rowUserData} />
            </Table>
          </TableContainer>
          <UserTablePagination total={rowUserData.length} />
        </Paper>
      </Box>
    </Stack>
  );
};

export default CouponTable;
