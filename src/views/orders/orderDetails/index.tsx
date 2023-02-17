import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';

import MainCard from '../../../ui-component/cards/MainCard';
import {
  OrderDelivery,
  OrderInfo,
  OrderPayment,
} from '../../../ui-component/OrderDetails';

interface TabPanelProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  value: number;
  index: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 3, borderRadius: '6px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OrderDetails() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLButtonElement>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <MainCard>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Chi tiết" {...a11yProps(0)} />
            <Tab label="Thanh toán" {...a11yProps(1)} />
            <Tab label="Giao hàng" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <OrderInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OrderPayment />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <OrderDelivery />
        </TabPanel>
      </Box>
    </MainCard>
  );
}
