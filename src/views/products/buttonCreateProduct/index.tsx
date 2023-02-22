import Add from '@mui/icons-material/Add';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

import NewProductForm from '../productForm';

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <NewProductForm />
          </DialogContent>
          <DialogActions sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
            <Button onClick={handleClose} variant="contained" color="success">Create</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
      
    </div>
  );
};

export default ButtonCreateProduct;
