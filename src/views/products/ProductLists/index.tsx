import {
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
import { IconEye, IconTrash } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ItemType } from '../../../api/firebase/dataType';
import {
  deleteItem,
  getAllItems,
} from '../../../api/firebase/handleData';
import ProductModal from '../ProductModal';
import ProductSnackBar from '../ProductSnackBar';

const ProductLists = () => {
  const navigate = useNavigate();
  const [productLists, setProductLists] = useState<any>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<string>('');
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);

  const selectProduct = (data: any) => {
    navigate(`/products/product-lists/${data.fireBaseId}`);
  };

  const showModalDelete = (fireBaseId: string) => {
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
    setIsOpenSnackBar(true);
    setTimeout(() => {
      setIsOpenSnackBar(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      setProductLists(await getAllItems(ItemType.PRODUCT));
    };
    fetchData().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productLists.length]);

  return (
    <Stack spacing={2} direction="column">
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
      <ProductModal
        isOpenModal={openModal}
        labelTextContent="Bạn có muốn xoá sản phẩm này không?"
        labelTitle="Xoá sản phẩm"
        labelCancel="Huỷ bỏ"
        labelSucess="Xoá sản phẩm"
        onCancel={closeModalDelete}
        onSucess={deleteProduct}
      />
      <ProductSnackBar 
        isOpenSnackBar={isOpenSnackBar}
        message="Xoá sản phẩm thành công"
        status="success"
        position={{vertical: 'top', horizontal: 'center'}}
      />
    </Stack>
  );
};

export default ProductLists;
