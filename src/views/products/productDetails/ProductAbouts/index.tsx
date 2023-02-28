import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab} from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';

import ProductDescriptions from './ProductDescriptions';
const ProductAbouts = (props: any) => {
  const [aboutInfo, setAboutInfo] = useState<any>({});
  useEffect(() => {
    console.log(props.aboutProduct, 'props.productAbout');
    setAboutInfo(props.aboutProduct);
  }, [props.aboutProduct]);

  const [value, setValue] = useState<any>('1');
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Mô tả" value="1" />
            <Tab label="Nhận xét" value="2" />
            <Tab label="Thông tin khác" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ width: '100%' }}>
        {aboutInfo && <ProductDescriptions aboutProduct={aboutInfo} />}
        </TabPanel>
        <TabPanel value="2">Nhận xét</TabPanel>
        <TabPanel value="3">Thông tin khác</TabPanel>
      </TabContext>
    </Box>
  );
};

export default ProductAbouts;
