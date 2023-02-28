import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

type Props = {
  photo: string[];
};
const ProductImagesCarousel = ({ photo }: Props) => {
  const [photoArr, setPhotoArr] = useState<string[]>([]);
  useEffect(() => {
    setPhotoArr(photo);
  }, [photo]);
  return (
    <Paper sx={{ width: '90%' }}>
      <Carousel>
        {photoArr.length > 0 &&
          photoArr.map((photo: string, index: number) => (
            <img
              src={photo}
              key={index}
              alt={photo}
              width="500px"
              height="500px"
            />
          ))}
      </Carousel>
    </Paper>
  );
};

export default ProductImagesCarousel;
