import { Add, Clear } from '@mui/icons-material';
import {
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const moreCombinaInit = {
  option: '',
  price: 0,
};

const ChildForm = (props: any) => {
  const [values, setValues] = useState(moreCombinaInit);
  const handleChangeInput = (event: any) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    props.getMoreCombina({ data: values, index: props.index });
  };

  const getIndex = (index: number) => {
    props.getIndex(index);
  };

  return (
    <Stack spacing={2} direction="row" sx={{ width: '100%' }}>
      <Stack spacing={2} direction="column" sx={{ width: '100%' }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography variant="subtitle2">Item {props.index + 1}</Typography>
          <IconButton
            color="error"
            aria-label="Add Product List"
            size="small"
            onClick={() => getIndex(props.index)}
          >
            <Clear />
          </IconButton>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ width: '100%' }}>
          <TextField
            id="outlined-number"
            label="Lựa chọn"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            name="option"
            onChange={handleChangeInput}
            sx={{ width: '100%' }}
          />
          <TextField
            id="outlined-number"
            label="Giá"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            name="price"
            onChange={handleChangeInput}
            sx={{ width: '100%' }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

const ProductMoreCombinaForm = (props: any) => {
  const [moreCombinaList, setMoreCombinaList] = useState([moreCombinaInit]);

  const addFormMoreCombina = () => {
    setMoreCombinaList([...moreCombinaList, moreCombinaInit]);
  };

  const getMoreCombina = (input: any) => {
    moreCombinaList.splice(input.index, 1, input.data);
    setMoreCombinaList([...moreCombinaList]);
  };

  const getIndex = (index: number) => {
    moreCombinaList.splice(index, 1);
    setMoreCombinaList([...moreCombinaList]);
  };

  useEffect(() => {
    props.getProductMoreCombinaData(moreCombinaList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moreCombinaList]);

  return (
    <>
      <Stack spacing={2} direction="column">
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography variant="subtitle1">Tổ hợp</Typography>
          <IconButton
            color="primary"
            aria-label="ML and Price"
            size="small"
            onClick={addFormMoreCombina}
          >
            <Add />
          </IconButton>
        </Stack>
        <Stack spacing={2} direction="column">
          <List>
            {moreCombinaList.map((item: any, index: number) => (
              <ListItem key={index}>
                <ChildForm
                  index={index}
                  getMoreCombina={getMoreCombina}
                  getIndex={getIndex}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductMoreCombinaForm;
