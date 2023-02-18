import React, { useEffect, useState } from 'react';
import { ProductAboutsType } from '../productType';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {} from '@mui/material';

// const ProductAbouts = ({
//   descriptions1,
//   label,
//   photo,
//   title,
//   photoPosition,
//   qoue,
// }: ProductAboutsType) => {
//   return (
//     <>
//       {/* <div>{ JSON.stringify(data)}</div> */}
//       <div>{descriptions1}</div>
//       <div>{label}</div>
//       <div>{photo}</div>
//       <div>{title}</div>
//       <div>{photoPosition}</div>
//       <div>{JSON.stringify(qoue)}</div>
//     </>
//   );
// };

// const ExpandMore = styled((props: any) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));


const ProductAbouts = (props: any) => {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    console.log(props, 'props');
    props.data?.photo && setPhoto(props.data?.photo);
    props.data?.description1 && setDescription(props.data?.description1);
    props.data?.label && setLabel(props.data?.label);
    props.data?.title && setTitle(props.data?.title);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      title={label}
    />
    <CardMedia
      component="img"
      height="194"
      image={photo}
      alt={title}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    </CardActions>
  </Card>
  );
};

export default ProductAbouts;
