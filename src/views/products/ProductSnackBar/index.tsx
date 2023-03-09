import { Alert, Snackbar } from '@mui/material';
import React from 'react';

import { ProductSnackbarType } from '../productType';

const ProductSnackBar = (props: ProductSnackbarType) => {
  const { position, status, message, isOpenSnackBar } = props;
  console.log(props);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: position.vertical,
        horizontal: position.horizontal,
      }}
      open={isOpenSnackBar}
      message={message}
      key={position.vertical + position.horizontal}
    >
      <Alert color={status} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ProductSnackBar;
