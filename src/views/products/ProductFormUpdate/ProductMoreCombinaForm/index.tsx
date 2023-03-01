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
  }

  return (
    <Stack spacing={2} direction="row">
      <TextField
        id="outlined-number"
        label="Lựa chọn"
        InputLabelProps={{
          shrink: true,
        }}
        size="small"
        name="option"
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

const ProductMoreCombinaForm = (props: any) => {
  const [moreCombinaList, setMoreCombinaList] = useState([moreCombinaInit]);

  const updateMoreCombinaData = (isConfirm: boolean) => {
    props.updateMoreCombinaData({data: moreCombinaList, isConfirm});
  }

  const addFormMoreCombina = () => {
    setMoreCombinaList([...moreCombinaList, moreCombinaInit]);
  };

  const getMoreCombina = (input: any) => {
    moreCombinaList.splice(input.index, 1, input.data);
    setMoreCombinaList([...moreCombinaList])
  }

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
                <ChildForm index={index} getMoreCombina={getMoreCombina}/>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductMoreCombinaForm;
