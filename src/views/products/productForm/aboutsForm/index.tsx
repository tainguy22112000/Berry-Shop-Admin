import { Add } from '@mui/icons-material';
import { IconButton, List, ListItem, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
const AboutForm = () => {
  const [productLists, setProductLists] = useState<any>([]);
  const newAboutProduct = {
    description1: '',
    label: '',
    title: ''
  }
  const addFormProduct = () => {
    console.log('addFormProduct');
    setProductLists([...productLists, newAboutProduct]);
  };

  const setFormProduct = () => {
    console.log('setFormProduct');
  }

  const AboutProductForm = () => {
    return (
      <>
        <TextField >

        </TextField>
      </>
    )
  }
  return (
    <div>
      <Stack spacing={2} direction="column" justifyContent="center">
        <Stack spacing={2} direction="row" justifyContent="flex-start">
          <Typography variant="h6">About List</Typography>
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
          <List></List>
          {productLists.length > 0 && productLists.map((form: any, index: number) => (
            <ListItem key={index}>
              List
            </ListItem>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

export default AboutForm;
