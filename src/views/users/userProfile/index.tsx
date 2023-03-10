import { Box, Paper, Table, TableContainer } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { IRowUserDataProps, IUserTableHeader, Order } from '@/types';

import { ItemType } from '../../../api/firebase/dataType';
import { getAllItems } from '../../../api/firebase/handleData';
import { rowUserData } from '../../../constants/user/rowUserData';
import { userTableHeader } from '../../../constants/user/userTableHeader';
import {
  UserTableHeader,
  UserTablePagination,
  UserTableRow,
  UserTableToolbar,
} from '../../../ui-component/UserProfile/index';

export const UserTable = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [userData, setUserData] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
    const fetchDiscountData = async () => {
      const data = await getAllItems(ItemType.USERS);
      setUserData(data);
    };
    fetchDiscountData().catch(console.error);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <UserTableToolbar numSelected={selected.length} />
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
            <UserTableRow rowUserData={userData} />
          </Table>
        </TableContainer>
        <UserTablePagination total={rowUserData.length} />
      </Paper>
    </Box>
  );
};

export default UserTable;
