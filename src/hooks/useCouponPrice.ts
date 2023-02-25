import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PriceOptions } from '../constants/enum';
import {
  setCouponFreeShipping,
  setCouponValue,
} from '../store/coupon/couponAction';

export const useCouponPrice = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState<boolean>(false);

  const handleDiscountValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(event.target.value);
    if (price < 0 || price > 100) {
      setError(true);
    } else {
      setError(false);
    }
    dispatch(setCouponValue(parseFloat(event.target.value)));
  };

  const handleFreeShipClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCouponFreeShipping(event.target.checked));
  };

  return {
    error,
    setError,
    handleDiscountValue,
    handleFreeShipClick,
  };
};
