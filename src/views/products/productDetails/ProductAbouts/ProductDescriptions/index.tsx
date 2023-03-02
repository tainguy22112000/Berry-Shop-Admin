import {
  Box,
  Card,
  CardContent,
  CardMedia,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const AboutProductCard = (props: any) => {
  const [description, setDescription] = useState(props.data.description1);
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    props.updateDescription({
      description: e.target.value,
      index: props.index,
    });
  };
  return (
    <Card sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {props.isEditMode ? (
            <TextareaAutosize
              onChange={handleInputChange}
              minRows={5}
              placeholder="Mô tả sản phẩm"
              style={{ height: '100%', padding: '10px' }}
              value={description}
            />
          ) : (
            <Typography component="div" variant="h5">
              {props.data.description1}
            </Typography>
          )}
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '30%', height: '30%' }}
        image={props.data.photo}
        alt="Photo Description"
      />
    </Card>
  );
};

const ProductDescriptions = (props: any) => {
  const [aboutProductList, setAboutProductList] = useState<any>([]);

  const updateDescription = (data: any) => {
    aboutProductList.splice(data.index, 1, {
      ...aboutProductList[data.index],
      description1: data.description,
    });
    setAboutProductList(aboutProductList);
    props.updateAboutProduct(aboutProductList);
  };

  useEffect(() => {
    setAboutProductList(props.aboutProduct);
  }, [props.aboutProduct]);

  return (
    <Carousel autoPlay={false}>
      {aboutProductList.length > 0 &&
        aboutProductList.map((item: any, index: number) => (
          <AboutProductCard
            data={item}
            key={index}
            index={index}
            isEditMode={props.isEditMode}
            updateDescription={updateDescription}
          />
        ))}
    </Carousel>
  );
};
export default ProductDescriptions;
