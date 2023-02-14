import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { get } from '../../../api/firebase/getData';

import MainCard from '../../../ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

type ProductDetail = {

}

const ProductsDetails = () => {
  const [data, setData]= useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const a = await get();
      setData(a);
    }
    fetchData().catch(console.error);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     Object.keys(data).forEach((item: any) => {

  //     })
  //   }, 1500);
  // }, [data]);

  return (
    <MainCard title="Sample Card">
      <Typography variant="body1">Product Details</Typography>
      {/* {
        data && JSON.stringify(data)
      } */}

      <ul>
        { data && data.map((item: any, index: number) => (
          <li key={index}> {item.phone}</li>
        ))}
      </ul>
    </MainCard>
  );
}

export default ProductsDetails;
