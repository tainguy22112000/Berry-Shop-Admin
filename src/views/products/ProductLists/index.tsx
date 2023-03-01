import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ItemType } from '../../../api/firebase/dataType';
import {
  addItem,
  deleteItem,
  getAllItems,
} from '../../../api/firebase/handleData';
import { productDetailTest, test } from '../../../api/firebase/productList';
import { stylesButton } from '../button.styles';

const ProductLists = () => {
  const navigate = useNavigate();
  const [productLists, setProductLists] = useState<any>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<string>('');

  const selectProduct = (data: any) => {
    navigate(`/products/product-lists/${data.fireBaseId}`);
  };

  const showModalDelete = (fireBaseId: string) => {
    // console.log(fireBaseId, 'fireBaseId');
    setIdSelected(fireBaseId);
    setOpenModal(true);
  };

  const closeModalDelete = () => {
    setOpenModal(false);
  };

  const deleteProduct = () => {
    const index = productLists.findIndex(
      (product: any) => (product.fireBaseId = idSelected),
    );
    productLists.splice(index, 1);
    setProductLists(productLists);
    deleteItem(ItemType.PRODUCT, idSelected);
    setOpenModal(false);
  };

  const addProduct = () => {
    addItem(ItemType.PRODUCT, productDetailTest);
  };

  useEffect(() => {
    const fetchData = async () => {
      setProductLists(await getAllItems(ItemType.PRODUCT));
    };
    fetchData().catch(console.error);
    console.log(productLists, 'productLists');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productLists.length]);

  return (
    <Stack spacing={2} direction="column">
      {/* <Button onClick={addProduct}>Add Product</Button> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center" sx={{ minWidth: '150px' }}>
                Số lượng
              </TableCell>
              <TableCell align="center">Xem chi tiết/Xoá</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productLists.length > 0 &&
              productLists.map((product: any, index: number) => (
                <TableRow hover key={index}>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    {product.name}
                  </TableCell>
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="center" sx={{ minWidth: '150px' }}>
                    {product.amount}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="copy"
                      size="small"
                      onClick={() => selectProduct(product)}
                    >
                      <IconEye />
                    </IconButton>
                    <IconButton
                      aria-label="copy"
                      size="small"
                      onClick={() => showModalDelete(product.fireBaseId)}
                    >
                      <IconTrash />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={openModal}
        onClose={closeModalDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Xoá sản phẩm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color="error">
            Bạn có muốn xoá sản phẩm này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            style={stylesButton.cancel}
            onClick={closeModalDelete}
          >
            Huỷ bỏ
          </Button>
          <Button
            variant="contained"
            style={stylesButton.button}
            onClick={deleteProduct}
            autoFocus
          >
            Xoá sản phẩm
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default ProductLists;
