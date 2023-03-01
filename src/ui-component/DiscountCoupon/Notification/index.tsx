import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { Dispatch } from 'react';

import { ItemType } from '../../../api/firebase/dataType';
import { deleteItem } from '../../../api/firebase/handleData';

interface IAlertDialog {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  deleteId: string;
  notification: string;
}

export default function DeleteNotification({
  open,
  setOpen,
  deleteId,
  notification,
}: IAlertDialog) {
  const handleClickConfirm = () => {
    console.log('deleteid', deleteId);
    deleteItem(ItemType.DISCOUNT, deleteId);
    setOpen(false);
    location.reload();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle id="alert-dialog-title">Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {notification}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleClickConfirm} autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
