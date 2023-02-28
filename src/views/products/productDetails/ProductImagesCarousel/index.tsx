import { Button, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

import { productDetailTest } from '../../../../api/firebase/productList';
const ProductImagesCarousel = () => {
  const [photoArr, setPhotoArr] = useState([]);
  useEffect(() => {
    // @ts-ignore
    setPhotoArr(productDetailTest?.photo);
    // console.log(productDetailTest, 'productDetailTest');
  }, [photoArr]);
  return (
    <Paper sx={{ width: '90%' }}>
      <Carousel>
        {photoArr.length > 0 &&
          photoArr.map((photo: string, index: number) => (
            <img src={photo} key={index} alt={photo} />
          ))}
      </Carousel>
    </Paper>
  );
};

export default ProductImagesCarousel;
