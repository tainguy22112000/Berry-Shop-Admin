import { Box } from '@mui/material';
import React from 'react';

import MainCard from '../../../ui-component/cards/MainCard';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //
type Props = {
  children?: React.ReactNode;
}

const AuthCardWrapper = ({ children, ...other }: Props) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%',
      },
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
  </MainCard>
);

export default AuthCardWrapper;
