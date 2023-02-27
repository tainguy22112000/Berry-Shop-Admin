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
const MoreCombinaChip = (props: any) => {
  const [moreCombina, setMoreCombina] = useState<any>([]);
  useEffect(() => {
    setMoreCombina(props.moreCombina);
  }, [props.moreCombina])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Lựa chọn</TableCell>
            <TableCell align="center">Giá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moreCombina.length > 0 &&  moreCombina.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell align="center">{item.option}</TableCell>
              <TableCell align="center">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoreCombinaChip;
