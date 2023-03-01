import { Alert, Button, Dialog, Stack } from '@mui/material';
import { IconCheck } from '@tabler/icons';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ItemType } from '../../../api/firebase/dataType';
import { addItem } from '../../../api/firebase/handleData';
import { setOpenCreateModal } from '../../../store/coupon/couponAction';
import { styles } from './index.styles';

const ConfirmButton = () => {
  const data = useSelector(({ couponData }) => couponData);
  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState(false);
  console.log('data', data);

  const handleSubmit = () => {
    addItem(ItemType.DISCOUNT, data);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const handleCancel = () => {
    dispatch(setOpenCreateModal(false));
  };

  return (
    <Stack spacing={1} alignItems="center" justifyContent="center">
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 5, mt: 5 }}
      >
        <Button
          variant="contained"
          size="large"
          sx={styles.button}
          onClick={handleSubmit}
        >
          Tạo mã giảm giá
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={styles.cancel}
          onClick={handleCancel}
        >
          Huỷ bỏ
        </Button>
      </Stack>
      (
      <Dialog open={alert}>
        <Alert
          icon={<IconCheck fontSize="inherit" />}
          severity="success"
          sx={styles.alert}
        >
          Tạo mã giảm giá thành công
        </Alert>
      </Dialog>
      )
    </Stack>
  );
};

export default ConfirmButton;
