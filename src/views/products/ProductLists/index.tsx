import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ItemType } from '../../../api/firebase/dataType';
import { getAllItems } from '../../../api/firebase/handleData';
const ProductLists = () => {
  const navigate = useNavigate();
  const [productLists, setProductLists] = useState<any>([]);
  const selectProduct = (data: any) => {
    navigate(`/products/product-lists/${data.fireBaseId}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      setProductLists(await getAllItems(ItemType.PRODUCT));
    };
    fetchData().catch(console.error);
    console.log(productLists, 'productLists');
  }, []);
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
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="center">Chỉnh sửa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productLists.length > 0 &&
              productLists.map((product: any, index: number) => (
                <TableRow
                  hover
                  key={index}
                  onClick={() => selectProduct(product)}
                >
                  <TableCell>{product.name}</TableCell>
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="center" sx={{ minWidth: '150px' }}>
                    {product.amount}
                  </TableCell>
                  <TableCell align="center">Ngày tạo</TableCell>
                  <TableCell align="center">Chỉnh sửa</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ProductLists;
