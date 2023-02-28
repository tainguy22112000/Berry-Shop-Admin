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

import { MlAndPrice } from '../../../productType'

const MlAndPriceChip = (props: any) => {
  const [mlAndPrice, setMlAndPrice] = useState<MlAndPrice>({});
  useEffect(() => {
    setMlAndPrice(props.mlAndPrice);
  }, [props.mlAndPrice]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ML</TableCell>
            <TableCell align="center">Giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(mlAndPrice).length > 0 && Object.keys(mlAndPrice).map((key: string, index: number) => (
            <TableRow key={index}>
              <TableCell align="center">{mlAndPrice[key].ml}</TableCell>
              <TableCell align="center">{mlAndPrice[key].price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MlAndPriceChip;
