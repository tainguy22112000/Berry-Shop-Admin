import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import MlAndPriceChip from '../MlAndPriceChip';
import MoreCombinaChip from '../MoreCombinaChip';

const ProductListTable = (props: any) => {
  const [data, setData] = useState(props.productList);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log(props.productList, 'props.productList');
    if (props.productList) {
      setProductList(props.productList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);
  return (
    <TableContainer component={Paper} sx={{ width: '100%', flexGrow: 1 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ maxWidth: '100px' }}>ID</TableCell>
            <TableCell align="center">Tên</TableCell>
            <TableCell align="center">Số lượng</TableCell>
            <TableCell align="center" sx={{ minWidth: '150px' }}>
              Nguyên liệu chính
            </TableCell>
            <TableCell align="center" sx={{ minWidth: '200px' }}>
              Định lượng và giá
            </TableCell>
            <TableCell align="center" sx={{ minWidth: '200px' }}>
              Tổ hợp
            </TableCell>
            <TableCell align="center">Giá cả</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.length > 0 &&
            productList.map((product: any, index: number) => (
              <TableRow key={index}>
                <TableCell sx={{ maxWidth: '100px', fontWeight: 'bold' }}>{product.id}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.amount}</TableCell>
                <TableCell align="center"> {product.mainIngredient}</TableCell>
                <TableCell align="center" sx={{ minWidth: '200px' }}>
                  <MlAndPriceChip mlAndPrice={product.mlAndPrice} />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ minWidth: '200px', overflowY: 'auto' }}
                >
                  <MoreCombinaChip moreCombina={product.moreCombina} />
                </TableCell>
                <TableCell align="center">{product.price}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductListTable;
