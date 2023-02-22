import { Divider, Stack, TextareaAutosize, Typography } from '@mui/material';
import React, { useState } from 'react';

const CouponDescription = () => {
  const [description, setDescription] = useState<string>('');
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography variant="subtitle1" component="h2">
          Ghi chú
        </Typography>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Ghi chú"
          style={{ width: '100%', padding: '10px' }}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CouponDescription;
