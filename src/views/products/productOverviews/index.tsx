import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect,useState } from 'react';

import MainCard from '../../../ui-component/cards/MainCard';
import { PropsProductOverview } from '../productType';

const ProductOverview = (props: PropsProductOverview) => {
  const [mlAndPrice, setMlAndPrice] = useState<any>({});
  const [price, setPrice] = useState<any>(0);
  const [mainIngredient, setMainIngredient] = useState<any>('');
  const [moreCombina, setMoreCombina] = useState<any>([]);

  useEffect(() => {
    props.data?.mlAndPrice && setMlAndPrice(props.data.mlAndPrice);
    props.data?.price && setPrice(props.data.price);
    props.data?.mainIngredient && setMainIngredient(props.data.mainIngredient);
    props.data?.moreCombina && setMoreCombina(props.data.moreCombina);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainCard title="Over View">
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="h3" component="div">
            Combina
          </Typography>
          <List>
            { moreCombina.map((item: any, index: number) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  key={index}
                  secondary={`Option: ${item.option}. Price: ${item.price}` }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs>
          <Typography variant="h3" component="div">
            ML And Price
          </Typography>
          <MainCard border={false}>
            {Object.keys(mlAndPrice).length !== 0 && Object.keys(mlAndPrice).map((key: string, index: number) => (
              <div key={index}>
                {`${mlAndPrice[key].ml} ${mlAndPrice[key].price}`}
              </div>
            ))}
          </MainCard>
        </Grid>
        <Grid item xs>
          <Typography variant="h3" component="div">
            Price
          </Typography>
          <MainCard border={false}>
            <div> {price} </div>
          </MainCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ProductOverview;
