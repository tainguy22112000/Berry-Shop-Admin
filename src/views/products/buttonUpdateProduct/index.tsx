import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';

import { ItemType } from '../../../api/firebase/dataType';
import { updateItem } from '../../../api/firebase/handleData';

const ButtonUpdateProduct = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const updateProduct = () => {
    setOpenModal(false);
    setLoading(true);
    updateItem(ItemType.ORDERS, props.data, props.id);
    setLoading(false);
  };

  const handleClose = () => {
    setOpenModal(false);
  }
  const handleOpen = () => {
    setOpenModal(true);
  }
  return (
    <div>
      <LoadingButton
        color="secondary"
        onClick={handleOpen}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        <div>Save Change</div>
      </LoadingButton>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color="error">
            Are you sure to update this order with ID: {props.id}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button onClick={updateProduct} autoFocus variant="contained" color="success">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ButtonUpdateProduct;
