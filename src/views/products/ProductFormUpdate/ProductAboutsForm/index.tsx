import { Add } from '@mui/icons-material';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Stack,
  // TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import ChildForm from './ChildForm';

const ProductAboutsForm = (props: any) => {
  const initialAboutProduct = {
    description1: '',
    label: '',
    title: '',
  };
  const [productLists, setProductLists] = useState<any>([initialAboutProduct]);

  const addFormProduct = () => {
    setProductLists([...productLists, initialAboutProduct]);
  };

  const getIndex = (index: number) => {
    productLists.splice(index, 1);
    setProductLists([...productLists]);
  };

  const getEachProductAboutsForm = (data: any, index: number) => {
    productLists.splice(index, 1, data);
    setProductLists([...productLists]);
  };

  useEffect(() => {
    props.getProductAboutData([...productLists]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productLists]);

  return (
    <Stack spacing={2} direction="column" justifyContent="center">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="subtitle1" component="h2">Giới thiệu về sản phẩm</Typography>
        <IconButton
          color="primary"
          aria-label="Add Product List"
          size="small"
          onClick={addFormProduct}
        >
          <Add />
        </IconButton>
      </Stack>
      <Stack>
        <Stack sx={{ marginTop: '0px !important' }}>
          <List sx={{ overflowY: 'auto', maxHeight: '500px' }}>
            {productLists.length > 0 &&
              productLists.map((form: any, index: number) => (
                <ListItem key={index}>
                  <ChildForm
                    index={index}
                    getIndex={getIndex}
                    getEachProductAboutsForm={getEachProductAboutsForm}
                  />
                </ListItem>
              ))}
          </List>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default ProductAboutsForm;
