import { Clear } from '@mui/icons-material';
import {
  Grid,
  IconButton,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useState } from 'react';

import UploadImage from './UploadImage';

const ChildForm = (props: any) => {
  const initialAboutProduct = {
    description1: '',
    label: '',
    title: '',
  };
  const [aboutProductForm, setAboutProductForm] = useState(initialAboutProduct);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAboutProductForm({
      ...aboutProductForm,
      [name]: value,
    });
    props.getEachAboutForm(aboutProductForm, props.index);
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value, 'e.target.value');
    setAboutProductForm({
      ...aboutProductForm,
      description1: e.target.value,
    });
  };

  const removeFormProduct = (index: number) => {
    props.getIndex(index);
  };

  return (
    <Stack spacing={2} direction="column">

    </Stack>
    // <Grid container spacing={2}>
    //   <Grid item xs>
    //     <TextareaAutosize
    //       aria-label="minimum height"
    //       minRows={5}
    //       placeholder="Ghi chú"
    //       style={{ width: '100%', padding: '10px' }}
    //       value={aboutProductForm.description1}
    //       onChange={handleChangeDescription}
    //     />
    //   </Grid>
    //   <Grid
    //     item
    //     xs
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'flex-start',
    //     }}
    //   >
    //     <TextField
    //       variant="outlined"
    //       label="Nhãn dán"
    //       name="label"
    //       value={aboutProductForm.label}
    //       onChange={handleInputChange}
    //       sx={{ width: '100%' }}
    //     />
    //   </Grid>
    //   <Grid
    //     item
    //     xs
    //     sx={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'flex-start',
    //     }}
    //   >
    //     {/* <Typography>Tiêu đề</Typography> */}
    //     <TextField
    //       variant="outlined"
    //       label="Tiêu đề"
    //       name="title"
    //       value={aboutProductForm.title}
    //       onChange={handleInputChange}
    //       sx={{ width: '100%' }}
    //     />
    //   </Grid>
    //   {/* <Grid item xs sx={{display: 'flex', alignContent: 'center'}}>
    //       <UploadImage />
    //     </Grid> */}
    //   <Grid
    //     item
    //     xs={1}
    //     sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    //   >
    //     <IconButton
    //       color="error"
    //       aria-label="Add Product List"
    //       size="small"
    //       onClick={() => removeFormProduct(props.index)}
    //     >
    //       <Clear />
    //     </IconButton>
    //   </Grid>
    // </Grid>
  );
};

export default ChildForm;
