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

import { stylesRadio } from '../../../radio.styles';

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
        label="Option"
        InputLabelProps={{
          shrink: true,
        }}
        size="small"
        name="option"
        onChange={handleChangeInput}
      />
      <TextField
        id="outlined-number"
        label="Price"
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

const MoreCombinaForm = (props: any) => {
  const [checked, setChecked] = useState(false);
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

  const toggleToConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked(checked);
    updateMoreCombinaData(checked);
  };
  return (
    <>
      <Stack spacing={2} direction="column">
        <Stack spacing={2} direction="row" alignItems="center">
          <Typography variant="h3">More Combina</Typography>
          <IconButton
            color="primary"
            aria-label="ML and Price"
            size="small"
            onClick={addFormMoreCombina}
          >
            <Add />
          </IconButton>
          <FormControlLabel
          label="Confirm"
          control={<Checkbox sx={stylesRadio.radioColor} checked={checked} onChange={toggleToConfirm} />}
        />
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

export default MoreCombinaForm;
