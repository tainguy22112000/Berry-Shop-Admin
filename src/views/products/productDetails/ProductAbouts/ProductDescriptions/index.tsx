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
  const [label, setLabel] = useState(props.data.label);
  const handleLabelChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLabel(e.target.value);
    props.updateDescription({
      label: e.target.value,
      index: props.index,
    });
  };
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    props.updateDescription({
      description: e.target.value,
      index: props.index,
    });
  };

  useEffect(() => {
    props.updateDescription({
      description: description,
      label: label,
      index: props.index,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, label]);

  return (
    <Box sx={{ padding: '1rem 8rem' }}>
      <Stack direction="row">
        <Box>
          <img src={props.data.photo} alt="Photo" width={400} />
        </Box>
        <Box sx={{ padding: '0 5rem', flexGrow: 1 }}>
          <Stack spacing={2}>
            {props.isEditMode ? (
              <TextField
                onChange={handleLabelChange}
                minRows={5}
                placeholder="Tiêu đề"
                value={label?.replace(/(<([^>]+)>)/gi, '')}
              />
            ) : (
              <Typography component="div" variant="h2">
                {props.data?.label.replace(/(<([^>]+)>)/gi, '')}
              </Typography>
            )}
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
              <Typography component="div" variant="body1" lineHeight={1.5}>
                {props.data.description1}
              </Typography>
            )}
          </Stack>
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
      label: data.label,
    });
    setAboutProductList([...aboutProductList]);
    props.updateAboutProduct([...aboutProductList]);
  };

  useEffect(() => {
    setAboutProductList(props.aboutProduct);
  }, [props.aboutProduct]);

  return (
    <Carousel autoPlay={false} height={400} indicators navButtonsAlwaysVisible>
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
