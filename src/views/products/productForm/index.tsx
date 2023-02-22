import { Chip, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

import { capitalizeFirstLetter, createRandomId } from '../../../helper/string-utls';
import AboutForm from './aboutsForm';
import PaymentsForm from './paymentsForm';

const NewProductForm = (props: any) => {
  const initialValues = {
    id: createRandomId(),
    address: '',
    paymentMethod: 'Momo',
    status: 'paymenting',
    recipientName: '',
    phone: '',
    aboutProduct: [],
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [values, setValues] = useState(initialValues);

  const updatePayment = (payment: string) => {
    console.log(payment);
    setValues({
      ...values,
      paymentMethod: payment,
    });
  };

  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
      <Grid container spacing={2}>
        <Grid item xs>
          <Stack spacing={2} direction="column" justifyContent="center">
            <Typography variant="h4">
              ID: {values.id}
            </Typography>
            <TextField
              variant="outlined"
              label="Address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Recipient Name"
              name="recipientName"
              value={values.recipientName}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Phone"
              name="phone"
              value={values.phone}
              onChange={handleInputChange}
            />
            <PaymentsForm updatePayment={updatePayment} />
          </Stack>
          <Stack spacing={2}>
            <Chip label={capitalizeFirstLetter(values.status)} color="warning" />
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack spacing={2} direction="column" justifyContent="center">
            <AboutForm />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default NewProductForm;
