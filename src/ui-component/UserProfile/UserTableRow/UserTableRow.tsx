import {
  Checkbox,
  Chip,
  Rating,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';

import { IRowUserDataProps, Order } from '@/types';

import { getSortComparator } from '../../../views/utilities/getSortComparator';
import { stableSort } from '../../../views/utilities/stableSort';

interface IUserTableRowProps {
  rowUserData: IRowUserDataProps[];
}

const UserTableRow = ({ rowUserData }: IUserTableRowProps) => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof IRowUserDataProps>('id');
  const [selected, setSelected] = useState<Array<any>>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowUserData.length) : 0;

  return (
    <TableBody>
      {stableSort(
        rowUserData ? rowUserData : [],
        getSortComparator(order, orderBy),
      )
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: IRowUserDataProps, index: number) => {
          const isItemSelected = isSelected(row.firstName);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              // onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.firstName}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {row ? row.firstName + '' + row.lastName : ''}
              </TableCell>
              <TableCell align="left">
                <Chip
                  color="warning"
                  variant="filled"
                  label={row ? row.gender : ''}
                  sx={{ textTransform: 'capitalize' }}
                />
              </TableCell>
              <TableCell align="left">{row ? row.address : ''}</TableCell>
              <TableCell align="left">{row ? row.txtPhone : ''}</TableCell>
              <TableCell align="left">
                {/* <Rating name="read-only" value={Number(row.email)} readOnly /> */}
                {row.email}
              </TableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: (dense ? 33 : 53) * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default UserTableRow;
