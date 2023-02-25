import { Alert, Button, Stack } from '@mui/material';
import { IconCheck } from '@tabler/icons';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { ItemType } from '../../../api/firebase/dataType';
import { addItem } from '../../../api/firebase/handleData';
import { styles } from './index.styles';

const ConfirmButton = () => {
  const data = useSelector(({ couponData }) => couponData);
  const [open, setOpen] = React.useState(false);
  console.log('data', data);

  const handleSubmit = () => {
    addItem(ItemType.DISCOUNT, data);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
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
        <Button variant="outlined" size="large" sx={styles.cancel}>
          Huỷ bỏ
        </Button>
      </Stack>
      {open && (
        <Alert
          icon={<IconCheck fontSize="inherit" />}
          severity="success"
          sx={styles.alert}
        >
          Tạo mã giảm giá thành công
        </Alert>
      )}
    </Stack>
  );
};

export default ConfirmButton;
