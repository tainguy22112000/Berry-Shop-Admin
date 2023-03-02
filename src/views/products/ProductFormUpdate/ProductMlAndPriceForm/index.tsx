import { Add, Clear } from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { convertMLAndPriceDara } from './converter';

const mlAndPriceInit = {
  ml: '0ml',
  price: 0,
};

const ChildForm = (props: any) => {
  const [values, setValues] = useState(mlAndPriceInit);
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    if (name === 'ml') {
      value = `${value}ml`;
    }
    setValues({
      ...values,
      [name]: value,
    });
    props.getMlAndPrice({ data: values, index: props.index });
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
            label="Dung tích"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            name="ml"
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

const ProductMlAndPriceForm = (props: any) => {
  const [mlAndPriceList, setMlAndPriceList] = useState([mlAndPriceInit]);

  const addFormMlAndPrice = () => {
    setMlAndPriceList([...mlAndPriceList, mlAndPriceInit]);
  };

  const getMlAndPrice = (input: any) => {
    mlAndPriceList.splice(input.index, 1, input.data);
    setMlAndPriceList([...mlAndPriceList]);
  };

  const getIndex = (index: number) => {
    mlAndPriceList.splice(index, 1);
    setMlAndPriceList([...mlAndPriceList]);
  }

  useEffect(() => {
    const newData = convertMLAndPriceDara(mlAndPriceList);
    props.getProductMlAndPriceData(newData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mlAndPriceList]);

  return (
    <Stack spacing={2} direction="column">
      <Stack spacing={2} direction="row" alignItems="center">
        <Typography variant="subtitle1">Giá theo dung tích</Typography>
        <IconButton
          color="primary"
          aria-label="ML and Price"
          size="small"
          onClick={addFormMlAndPrice}
        >
          <Add />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="column">
        <List>
          {mlAndPriceList.map((name: any, index: number) => (
            <ListItem key={index}>
              <ChildForm index={index} getMlAndPrice={getMlAndPrice} getIndex={getIndex}/>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default ProductMlAndPriceForm;
