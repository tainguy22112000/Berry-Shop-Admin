import {
  Button,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { IconTrash } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IRowOrderDataProps, Order } from '@/types';

import { ItemType } from '../../../api/firebase/dataType';
import { deleteItem, updateItem } from '../../../api/firebase/handleData';
import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../../../constants/routes';
import { setProductOrderDetails } from '../../../store/product/productOrder.action';
import {
  getColorChip,
  getPayments,
  listPaymensts,
} from '../../../views/utilities/convertOrderStatus';
import { convertDateFireBase } from '../../../views/utilities/convertTimeStamp';
import { getSortComparator } from '../../../views/utilities/getSortComparator';
import { stableSort } from '../../../views/utilities/stableSort';
import ProductModal from '../ProductModal';

interface IOrderTableRowProps {
  rowOrderData: IRowOrderDataProps[];
  page: number;
  rowsPerPage: number;
  openSnackBar: (status: boolean) => void;
}

interface IPayementMenuProps {
  status: string;
  updatePaymentOrder: (payment: string) => void;
}

const PaymentMenu = (props: IPayementMenuProps) => {
  const [currentPayment, setCurrentPayment] = useState(props.status);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLLIElement>, payment: string) => {
    e.stopPropagation();
    if (!listPaymensts.includes(payment)) {
      setAnchorEl(null);
      return;
    }
    setAnchorEl(null);
    setCurrentPayment(payment);
    props.updatePaymentOrder(payment);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <Chip
          color={getColorChip(currentPayment)}
          variant="outlined"
          label={getPayments(currentPayment)}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {listPaymensts
          .filter((p: string) => p !== currentPayment)
          .map((payment: string, index: number) => (
            <MenuItem key={index} onClick={(e) => handleClose(e, payment)}>
              <Chip
                color={getColorChip(payment)}
                variant="outlined"
                label={getPayments(payment)}
              />
              <Divider />
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

const ProductOrderRow = ({
  rowOrderData,
  page,
  rowsPerPage,
  openSnackBar,
}: IOrderTableRowProps) => {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] =
    useState<keyof IRowOrderDataProps>('recipientName');
  const [selected, setSelected] = useState<Array<any>>([]);
  const [dense, setDense] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<string>('');

  const closeModalDelete = () => {
    setIsOpenModal(false);
  };

  const deleteProduct = () => {
    const index = rowOrderData.findIndex(
      (product: any) => product.fireBaseId === idSelected,
    );
    rowOrderData.splice(index, 1);
    deleteItem(ItemType.ORDERS, idSelected);
    setIsOpenModal(false);
    openSnackBar(true);
    setTimeout(() => {
      openSnackBar(false);
    }, 3000);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowOrderData.length) : 0;

  const selectProductDetail = (data: IRowOrderDataProps) => {
    dispatch(setProductOrderDetails(data));
    navigate(
      `${PRODUCTS_PAGE_ROUTER}/${PRODUCTS_PATH.ProductOrderList}/${data.fireBaseId}`,
    );
  };

  const updatePaymentOrder = (payment: string, fireBaseId: string) => {
    const index = rowOrderData.findIndex(
      (order) => order.fireBaseId === fireBaseId,
    );
    rowOrderData[index].status = payment;
    updateItem(ItemType.ORDERS, rowOrderData[index], fireBaseId);
  };

  return (
    <>
      <TableBody>
        {stableSort(rowOrderData, getSortComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: IRowOrderDataProps, index: number) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            const handleDeleleCoupon = (
              e: React.MouseEvent<HTMLButtonElement>,
              fireBaseId: string,
            ) => {
              e.stopPropagation();
              setIsOpenModal(true);
              setIdSelected(fireBaseId);
            };
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
                <TableCell align="center" padding="none">
                  {row.address}
                </TableCell>
                <TableCell align="center">{row ? row.phone : ''}</TableCell>
                <TableCell align="center">
                  {convertDateFireBase(row ? row.createOn : '')}
                </TableCell>
                <TableCell align="center">
                  <PaymentMenu
                    status={row.status}
                    updatePaymentOrder={(data: any) =>
                      updatePaymentOrder(data, row.fireBaseId)
                    }
                  />
                </TableCell>
                <TableCell align="center">{row.paymentMethods}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => handleDeleleCoupon(e, row.fireBaseId)}
                  >
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
      <ProductModal
        isOpenModal={isOpenModal}
        labelTextContent="Bạn có muốn xoá sản phẩm này không?"
        labelTitle="Xoá sản phẩm"
        labelCancel="Huỷ bỏ"
        labelSucess="Xoá sản phẩm"
        onCancel={closeModalDelete}
        onSucess={deleteProduct}
      />
    </>
  );
};

export default ProductOrderRow;
