import {
  Box,
  Stack,
  TextareaAutosize,
  TextField,
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
    <Box sx={{ padding: '0 4rem' }}>
      <Stack direction="row">
        <Box>
          <img src={props.data.photo} alt="Photo" width={400} />
        </Box>
        <Box sx={{ paddingLeft: 4, flexGrow: 1 }}>
          {props.isEditMode ? (
            <TextField
              onChange={handleInputChange}
              minRows={5}
              placeholder="Mô tả sản phẩm"
              value={description}
              multiline
              fullWidth
            />
          ) : (
            <Typography component="div" variant="body1">
              {props.data.description1}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

const ProductDescriptions = (props: any) => {
  const [aboutProductList, setAboutProductList] = useState<any>([]);

  const updateDescription = (data: any) => {
    aboutProductList.splice(data.index, 1, {
      ...aboutProductList[data.index],
      description1: data.description,
    });
    setAboutProductList([...aboutProductList]);
    props.updateAboutProduct([...aboutProductList]);
  };

  useEffect(() => {
    setAboutProductList(props.aboutProduct);
  }, [props.aboutProduct]);

  return (
    <Carousel autoPlay={false} height={500} indicators navButtonsAlwaysVisible>
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
