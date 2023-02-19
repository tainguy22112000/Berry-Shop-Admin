import React, { useState } from 'react';

import { PriceOptions } from '../constants/enum';

export const useCouponPrice = () => {
  const [freeShip, setFreeShip] = useState(true);
  const [option, setOption] = useState<string>(PriceOptions.CASH);
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const handleDiscountValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseFloat(event.target.value);
    if (price < 0 || price > 100) {
      setError(true);
    } else {
      setError(false);
    }
    setDiscountValue(parseFloat(event.target.value));
  };

  const handleFreeShipClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFreeShip(event.target.checked);
  };

  return {
    freeShip,
    option,
    setOption,
    error,
    setError,
    discountValue,
    setDiscountValue,
    handleDiscountValue,
    handleFreeShipClick,
  };
};
