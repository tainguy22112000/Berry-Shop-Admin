import { Clear } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';

import UploadImage from './uploadImage';

const AboutChildForm = (props: any) => {
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

  const removeFormProduct = (index: number) => {
    props.getIndex(index);
  }

  return (
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            variant="outlined"
            label="Description"
            name="description1"
            value={aboutProductForm.description1}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <TextField
            variant="outlined"
            label="Label"
            name="label"
            value={aboutProductForm.label}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs>
          <TextField
            variant="outlined"
            label="Title"
            name="title"
            value={aboutProductForm.title}
            onChange={handleInputChange}
          />
        </Grid>
        {/* <Grid item xs sx={{display: 'flex', alignContent: 'center'}}>
          <UploadImage />
        </Grid> */}
        <Grid item xs sx={{display: 'flex', justifyContent: 'center'}}>
          <IconButton
            color="error"
            aria-label="Add Product List"
            size="small"
            onClick={() => removeFormProduct(props.index)}
          >
            <Clear />
          </IconButton>
        </Grid>
      </Grid>
  );
};

export default AboutChildForm;
