import {
  Checkbox,
  Chip,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { IconTrash } from '@tabler/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { IRowOrderDataProps, Order } from '@/types';

import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../../../constants/routes';
import { setProductOrderDetails } from '../../../store/product/productOrder.action';
import DeleteNotification from '../../../ui-component/DiscountCoupon/Notification';
import {
  getColorChip,
  getPayments,
} from '../../../views/utilities/convertOrderStatus';
import { convertDateFireBase } from '../../../views/utilities/convertTimeStamp';
import { getSortComparator } from '../../../views/utilities/getSortComparator';
import { stableSort } from '../../../views/utilities/stableSort';

interface IOrderTableRowProps {
  rowOrderData: IRowOrderDataProps[];
  page: number;
  rowsPerPage: number;
}

const ProductOrderRow = ({
  rowOrderData,
  page,
  rowsPerPage,
}: IOrderTableRowProps) => {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] =
    useState<keyof IRowOrderDataProps>('recipientName');
  const [selected, setSelected] = useState<Array<any>>([]);
  const [dense, setDense] = useState(false);
  const dispatch = useDispatch();

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowOrderData.length) : 0;
  const [open, setOpen] = useState<boolean>(false);
  console.log('row', rowOrderData);
  const navigate = useNavigate();

  const selectProductDetail = (data: IRowOrderDataProps) => {
    console.log('router', typeof data);
    dispatch(setProductOrderDetails(data));
    navigate(
      `${PRODUCTS_PAGE_ROUTER}/${PRODUCTS_PATH.ProductOrderList}/${data.fireBaseId}`,
    );
  };

  return (
    <TableBody>
      {stableSort(rowOrderData, getSortComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: IRowOrderDataProps, index: number) => {
          const isItemSelected = isSelected(row.id);
          const labelId = `enhanced-table-checkbox-${index}`;
          const handleDeleleCoupon = () => {
            setOpen(true);
          };
          console.log(
            'row',
            `${PRODUCTS_PAGE_ROUTER + PRODUCTS_PATH + row.fireBaseId}`,
          );

          return (
            <TableRow
              hover
              onClick={() => selectProductDetail(row)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.fireBaseId}
              selected={isItemSelected}
              sx={{ cursor: 'pointer' }}
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
              <TableCell component="th" id={labelId} scope="row">
                {row ? row.recipientName : ''}
              </TableCell>
              <TableCell align="left" padding="none">
                {row.address}
              </TableCell>
              <TableCell align="left">{row ? row.phone : ''}</TableCell>
              <TableCell align="left">
                {convertDateFireBase(row ? row.createOn : '')}
              </TableCell>
              <TableCell align="center">
                <Chip
                  color={getColorChip(row.status)}
                  variant="outlined"
                  label={getPayments(row.status)}
                />{' '}
              </TableCell>
              <TableCell align="center">{row.paymentMethods}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" onClick={handleDeleleCoupon}>
                  <IconTrash size={20} color="red" />
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

export default ProductOrderRow;
function dispatch(arg0: { type: string; data: Record<string, any> }) {
  throw new Error('Function not implemented.');
}
