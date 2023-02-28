import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const AboutProductCard = ({ data }: any) => {
  return (
    <Card sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {data.description1}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '30%', height: '30%' }}
        image={data.photo}
        alt="Photo Description"
      />
    </Card>
  );
};

const ProductDescriptions = (props: any) => {
  const [aboutProductList, setAboutProductList] = useState<any>([]);
  useEffect(() => {
    setAboutProductList(props.aboutProduct);
  }, [props.aboutProduct]);
  return (
    <Carousel autoPlay={false}>
      {aboutProductList.length > 0 &&
        aboutProductList.map((item: any, index: number) => (
          <AboutProductCard data={item} key={index} />
        ))}
    </Carousel>
  );
};
export default ProductDescriptions;
