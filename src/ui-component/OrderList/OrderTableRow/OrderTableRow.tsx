import {
  Checkbox,
  Chip,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { IconEdit, IconEye } from '@tabler/icons';
import React, { useState } from 'react';

import { IRowOrderDataProps, Order } from '@/types';

import { getSortComparator } from '../../../views/utilities/getSortComparator';
import { stableSort } from '../../../views/utilities/stableSort';

interface IOderTableRow {
  rowOrderData: IRowOrderDataProps[];
}

const OrderTableRow = ({ rowOrderData }: IOderTableRow) => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof IRowOrderDataProps>('id');
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowOrderData.length) : 0;

  return (
    <TableBody>
      {stableSort(rowOrderData, getSortComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: IRowOrderDataProps, index: number) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
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
                {row.name}
              </TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.orders}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                <Chip color="success" variant="outlined" label={row.status} />
              </TableCell>
              <TableCell align="left">
                <IconButton aria-label="copy" size="small">
                  <IconEye />
                </IconButton>
                <IconButton aria-label="copy" size="small">
                  <IconEdit />
                </IconButton>
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

export default OrderTableRow;
