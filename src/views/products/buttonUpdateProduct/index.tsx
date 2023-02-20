import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react';

import { ItemType } from '../../../api/firebase/dataType';
import { addItem, updateItem } from '../../../api/firebase/handleData';
// import { updateData } from '../../../api/firebase/staticData';
const ButtonUpdateProduct = (props: any) => {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    // console.log(data, 'data');
    setLoading(true);
    updateItem(ItemType.ORDERS, props.data, props.id);
    setLoading(false);
  }
  return (
    <LoadingButton
      color="secondary"
      onClick={handleClick}
      loading={loading}
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="contained"
    >
      <div>Save Change</div>
    </LoadingButton>
  );
};

export default ButtonUpdateProduct;
