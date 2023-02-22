import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { PropsProductAbout } from '../productType'


const ProductAbouts = (props: PropsProductAbout) => {
  const [aboutData, setAboutData] = useState(props.data);
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
  const [isLabelFocused, setIsLabelFocused] = useState(false);

  const focusDescription = () => {
    setIsDescriptionFocused(true);
  };

  const focusLabel = () => {
    setIsLabelFocused(true);
  };

  const updateSetDescription = (description1: string) => {
    setDescription(description1);
    setAboutData({
      ...aboutData,
      description1,
    });
  };

  const updateSetLabel = (label: string) => {
    setLabel(label);
    setAboutData({
      ...aboutData,
      label,
    });
  };

  const updateProductAbouts = () => {
    setIsDescriptionFocused(false);
    setIsLabelFocused(false);
    props.updateProductAbouts({ data: aboutData, index: props.index });
  };

  const DescriptionProduct = () => {
    return isDescriptionFocused ? (
      <TextField
        sx={{ height: 100, color: 'red' }}
        fullWidth
        autoFocus
        value={description}
        onChange={(event) => updateSetDescription(event.target.value)}
        onBlur={() => updateProductAbouts()}
      />
    ) : (
      <Typography
        variant="body2"
        color="text.secondary"
        onClick={() => {
          focusDescription();
        }}
      >
        {description}
      </Typography>
    );
  };

  const LabelProduct = () => {
    return isLabelFocused ? (
      <TextField
        sx={{ height: 100, color: 'red' }}
        fullWidth
        autoFocus
        value={label}
        onChange={(event) => updateSetLabel(event.target.value)}
        onBlur={() => updateProductAbouts()}
      />
    ) : (
      <CardHeader
        title={label}
        onClick={() => {
          focusLabel();
        }}
      />
    );
  };

  useEffect(() => {
    props.data?.photo && setPhoto(props.data?.photo);
    props.data?.description1 && setDescription(props.data?.description1);
    props.data?.label && setLabel(props.data?.label);
    props.data?.title && setTitle(props.data?.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <LabelProduct />
      <CardMedia component="img" height="194" image={photo} alt={title} />
      <CardContent>
        <DescriptionProduct />
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};

export default ProductAbouts;
