import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
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
            {/* <TableCell sx={{ maxWidth: '100px' }}>ID</TableCell> */}
            {/* <TableCell align="center">Tên</TableCell> */}
            <TableCell align="left" sx={{ minWidth: '150px' }}>
              Tên sản phẩm
            </TableCell>
            <TableCell align="center">Số lượng</TableCell>
            <TableCell align="center">Size</TableCell>
            {/* <TableCell align="center" sx={{ minWidth: '200px' }}>
              Ghi chú
            </TableCell> */}
            <TableCell align="center">Đơn giá</TableCell>
            <TableCell align="center">Thành tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.length > 0 &&
            productList.map((product: any, index: number) => (
              <TableRow key={index}>
                <TableCell
                  sx={{ maxWidth: '150px', fontWeight: 'bold' }}
                  align="left"
                >
                  <Stack spacing="2px" textAlign="left">
                    <Typography variant="h5">
                      {product.mainIngredient}
                    </Typography>
                    <Typography variant="body1" fontSize={12}>
                      {product.optionPicked.cooldess}
                    </Typography>
                    <Typography variant="body1" fontSize={12}>
                      {product.optionPicked.ice}
                    </Typography>
                    <Typography variant="body1" fontSize={12}>
                      {product.optionPicked.sugar}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">{product.amount}</TableCell>
                <TableCell align="center">
                  {product.optionPicked.size}
                </TableCell>
                <TableCell align="center" sx={{ minWidth: '200px' }}>
                  {/* <MlAndPriceChip mlAndPrice={product.mlAndPrice} /> */}
                  <Typography>{product.price}</Typography>
                </TableCell>
                <TableCell align="center">
                  {/* <MoreCombinaChip moreCombina={product.moreCombina} /> */}
                  {Math.round(product.amount * product.price)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductListTable;
