import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import {
  OrderDelivery,
  OrderInfo,
  OrderPayment,
} from 'ui-component/OrderDetails';

const TabPanel = (props) => {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OrderDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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
