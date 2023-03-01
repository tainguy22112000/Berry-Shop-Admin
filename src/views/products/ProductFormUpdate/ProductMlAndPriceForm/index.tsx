import { Add } from '@mui/icons-material';
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
import React, { useState } from 'react';

import { convertMLAndPriceDara } from './converter';

const mlAndPriceInit = {
  ml: '0ml',
  price: 0,
};

const ChildForm = (props: any) => {
  const [values, setValues] = useState(mlAndPriceInit);
  const handleChangeInput = (event: any) => {
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

  return (
    <Stack spacing={2} direction="row">
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
      />
    </Stack>
  );
};

const ProductMlAndPriceForm = (props: any) => {
  const [checked, setChecked] = useState(false);
  const [mlAndPriceList, setMlAndPriceList] = useState([mlAndPriceInit]);

  const updateMlAndPriceData = (isConfirm: boolean) => {
    const newData = convertMLAndPriceDara(mlAndPriceList);
    props.updateMlAndPriceData({data: newData, isConfirm});
  };

  const addFormMlAndPrice = () => {
    setMlAndPriceList([...mlAndPriceList, mlAndPriceInit]);
  };

  const getMlAndPrice = (input: any) => {
    mlAndPriceList.splice(input.index, 1, input.data);
    setMlAndPriceList([...mlAndPriceList]);
  };

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
              <ChildForm index={index} getMlAndPrice={getMlAndPrice} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default ProductMlAndPriceForm;
