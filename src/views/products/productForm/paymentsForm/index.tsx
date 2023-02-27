import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { ChangeEvent } from 'react';

import { stylesRadio } from '../../radio.styles';

const PaymentsForm = (props: any) => {
  const paymentsList = ['Credit Card', 'Paypal', 'ZaloPay', 'MoMo'];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.updatePayment(e.target.value);
  };
  return (
    <>
      <FormControl>
        <FormLabel>Thanh toán với</FormLabel>
        <RadioGroup defaultValue="Paypal">
          {paymentsList.map((value, index) => (
            <FormControlLabel
              key={index}
              value={value}
              label={value}
              control={<Radio value={value} onChange={handleChange} sx={stylesRadio.radioColor}/>}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default PaymentsForm;
