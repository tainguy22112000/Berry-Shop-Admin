import Add from '@mui/icons-material/Add';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';

import { ItemType } from '../../../api/firebase/dataType';
import { addItem } from '../../../api/firebase/handleData';
import NewProductForm from '../ProductForm';

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        container: {
          display: 'flex',
        },
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          flexGrow: 1,
          maxWidth: 'unset !important',
        }
      },
    }
  }
})

const ButtonCreateProduct = () => {
  const [newProduct, setNewProduct]  = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    addItem(ItemType.TEST, newProduct);
  }

  const createNewProductData = (data: any) => {
    console.log(data, 'final');
    setNewProduct(data);
  }
  return (
    <div style={{marginTop: 0}}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ marginTop: '0px' }}
        startIcon={<Add />}
      >
        Create new orders
      </Button>
      <ThemeProvider theme={theme}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Create New Order</DialogTitle>
          <DialogContent>
            <NewProductForm createNewProductData={createNewProductData}/>
          </DialogContent>
          <DialogActions sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
            <Button onClick={handleCreate} variant="contained" color="success">Create</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
      
    </div>
  );
};

export default ButtonCreateProduct;
