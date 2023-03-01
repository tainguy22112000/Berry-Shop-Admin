import { Clear } from '@mui/icons-material';
import {
  Box,
  Divider,
  IconButton,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

import UploadImage from './UploadImage';

const ChildForm = (props: any) => {
  const initialAboutProduct = {
    description1: '',
    label: '',
    title: '',
  };
  const [aboutProductForm, setAboutProductForm] = useState(initialAboutProduct);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAboutProductForm({
      ...aboutProductForm,
      [name]: value,
    });
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAboutProductForm({
      ...aboutProductForm,
      description1: e.target.value,
    });
  };

  const removeFormProduct = (index: number) => {
    props.getIndex(index);
  };

  useEffect(() => {
    props.getEachProductAboutsForm(aboutProductForm, props.index);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutProductForm])

  return (
    <Stack spacing={2} direction="column" sx={{ width: '100%' }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <Typography variant='h4'>Mô tả {props.index + 1}</Typography>
        <IconButton
          color="error"
          aria-label="Add Product List"
          size="small"
          onClick={() => removeFormProduct(props.index)}
        >
          <Clear />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row" sx={{ height: '200px' }}>
        <Stack spacing={2} sx={{ flexGrow: '2' }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Mô tả sản phẩm"
            style={{ height: '100%', padding: '10px' }}
            value={aboutProductForm.description1}
            onChange={handleChangeDescription}
          />
        </Stack>
        <Stack spacing={2} sx={{ flexGrow: '1' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid grey',
              flexGrow: '1',
            }}
          >
            <UploadImage />
          </Box>
        </Stack>
      </Stack>
      <Stack spacing={2} direction="row">
        <Stack direction="column" sx={{width: '50%'}}>
          <Typography variant="subtitle1">Nhãn dán</Typography>
          <TextField
            variant="outlined"
            label="Nhãn dán"
            name="label"
            value={aboutProductForm.label}
            onChange={handleInputChange}
            sx={{ width: '100%' }}
          />
        </Stack>
        <Stack direction="column" sx={{width: '50%'}}>
          <Typography variant="subtitle1">Tiêu đề</Typography>
          <TextField
          variant="outlined"
          label="Tiêu đề"
          name="title"
          value={aboutProductForm.title}
          onChange={handleInputChange}
          sx={{ width: '100%' }}
        />
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default ChildForm;
