import {
  Checkbox,
  Chip,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import { IconEye, IconTrash } from '@tabler/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IRowProductDataProps, Order } from '@/types';

import { ItemType } from '../../../api/firebase/dataType';
import { deleteItem } from '../../../api/firebase/handleData';
import { PRODUCTS_PAGE_ROUTER, PRODUCTS_PATH } from '../../../constants/routes';
import { setProductOrderDetails } from '../../../store/product/productOrder.action';
import { getSortComparator } from '../../../views/utilities/getSortComparator';
import { stableSort } from '../../../views/utilities/stableSort';
import ProductModal from '../ProductModal';

interface IProductTableRowProps {
  rowProductData: IRowProductDataProps[];
  page: number;
  rowsPerPage: number;
  openSnackBar: (status: boolean) => void;
}

const ProductRow = ({
  rowProductData,
  page,
  rowsPerPage,
  openSnackBar,
}: IProductTableRowProps) => {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof IRowProductDataProps>('name');
  const [selected, setSelected] = useState<Array<any>>([]);
  const [dense, setDense] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<string>('');

  const closeModalDelete = () => {
    setIsOpenModal(false);
  };

  const deleteProduct = () => {
    const index = rowProductData.findIndex(
      (product: any) => product.fireBaseId === idSelected,
    );
    rowProductData.splice(index, 1);
    deleteItem(ItemType.PRODUCT, idSelected);
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
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - rowProductData.length)
      : 0;

  const selectProductDetail = (data: IRowProductDataProps) => {
    dispatch(setProductOrderDetails(data));
    navigate(
      `${PRODUCTS_PAGE_ROUTER}/${PRODUCTS_PATH.ProductLists}/${data.fireBaseId}`,
    );
  };

  return (
    <>
      <TableBody>
        {stableSort(rowProductData, getSortComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: IRowProductDataProps, index: number) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            const handleDeleleProduct = (
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
                <TableCell sx={{ fontWeight: 'bold' }}>{row.name}</TableCell>

                <TableCell align="center" sx={{ minWidth: '100px' }}>
                  <Chip
                    key={index}
                    label={row.mainIngredient}
                    sx={{
                      backgroundColor: orange[100],
                      color: orange[500],
                    }}
                  ></Chip>
                </TableCell>

                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="copy"
                    size="small"
                    onClick={() => selectProductDetail(row)}
                  >
                    <IconEye size={20} />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => handleDeleleProduct(e, row.fireBaseId)}
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

export default ProductRow;
