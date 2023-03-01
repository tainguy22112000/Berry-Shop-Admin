import { Checkbox, Chip, TableBody, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';

import { IRowCouponDataProps, IRowUserDataProps, Order } from '@/types';

import { PriceOptions } from '../../../constants/enum';
import { getSortComparator } from '../../../views/utilities/getSortComparator';
import { stableSort } from '../../../views/utilities/stableSort';

interface ICouponTableRowProps {
  rowCouponData: IRowCouponDataProps[];
  page: number;
  rowsPerPage: number;
}

const CouponTableRow = ({
  rowCouponData,
  page,
  rowsPerPage,
}: ICouponTableRowProps) => {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] =
    useState<keyof IRowCouponDataProps>('couponCode');
  const [selected, setSelected] = useState<Array<any>>([]);
  const [dense, setDense] = useState(false);

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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowCouponData.length) : 0;

  return (
    <TableBody>
      {stableSort(rowCouponData, getSortComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: IRowCouponDataProps, index: number) => {
          const isItemSelected = isSelected(row.couponCode);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              // onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.id}
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
                {row ? row.couponCode : ''}
              </TableCell>
              <TableCell align="center" padding="none">
                <Chip
                  color="warning"
                  variant="filled"
                  label={row ? row.couponQuantity : ''}
                  sx={{ textTransform: 'capitalize' }}
                />
              </TableCell>
              <TableCell align="left">
                {row ? row.couponValue : ''}{' '}
                {row.couponOptions === PriceOptions.PERCENTAGE ? '%' : 'VND'}
              </TableCell>
              <TableCell align="left">
                {row
                  ? row.couponStartDate.date + ' - ' + row.couponEndDate.date
                  : ''}
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.couponFreeShipping} />
              </TableCell>
              <TableCell align="center">
                {row.couponProductType.join(', ')}
              </TableCell>
              <TableCell align="center">{row.couponProductDetails}</TableCell>
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

export default CouponTableRow;
