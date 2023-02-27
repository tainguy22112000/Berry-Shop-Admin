import { Add } from '@mui/icons-material';
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Stack,
  // TextField,
  Typography,
} from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';

import { stylesRadio } from '../../radio.styles';
import AboutChildForm from './AboutChildForm';

const AboutForm = (props: any) => {
  const initialAboutProduct = {
    description1: '',
    label: '',
    title: '',
  };
  const [checked, setChecked] = useState(false);
  const [productLists, setProductLists] = useState<any>([initialAboutProduct]);

  const addFormProduct = () => {
    setProductLists([...productLists, initialAboutProduct]);
  };

  const getIndex = (index: number) => {
    productLists.splice(index, 1);
    setProductLists([...productLists]);
  };

  const getEachAboutForm = (data: any, index: number) => {
    productLists.splice(index, 1, data);
    setProductLists([...productLists]);
  };

  const toggleToConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked(checked);
    if (checked) {
      console.log('confirm about product');
    }
  };

  useEffect(() => {
    props.createAboutProduct([...productLists]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productLists])

  return (
    <Stack spacing={2} direction="column" justifyContent="center">
      <Stack spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
        <Typography variant="h3">About List</Typography>
        <IconButton
          color="primary"
          aria-label="Add Product List"
          size="small"
          onClick={addFormProduct}
        >
          <Add />
        </IconButton>
        <FormControlLabel
          label="Confirm"
          control={<Checkbox sx={stylesRadio.radioColor} checked={checked} onChange={toggleToConfirm} />}
        />
      </Stack>
      <Stack>
        <Stack sx={{ marginTop: '0px !important' }}>
          <List sx={{ overflowY: 'auto', maxHeight: '200px' }}>
            {productLists.length > 0 &&
              productLists.map((form: any, index: number) => (
                <ListItem key={index}>
                  <AboutChildForm
                    index={index}
                    getIndex={getIndex}
                    getEachAboutForm={getEachAboutForm}
                  />
                </ListItem>
              ))}
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutForm;
