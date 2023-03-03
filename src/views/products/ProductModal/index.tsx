import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

import { stylesButton } from '../button.styles';
import { ProductModalTypes } from '../productType';

const ProductModal = (props: ProductModalTypes) => {
  const {
    labelTitle,
    labelSucess,
    labelCancel,
    labelTextContent,
    isOpenModal,
    onSucess,
    onCancel,
  } = props;

  return (
    <Dialog
      open={isOpenModal ?? false}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{labelTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" color="error">
          {labelTextContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          style={stylesButton.cancel}
          onClick={onCancel}
        >
          {labelCancel}
        </Button>
        <Button
          variant="contained"
          style={stylesButton.button}
          onClick={onSucess}
          autoFocus
        >
          {labelSucess}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
