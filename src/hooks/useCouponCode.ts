import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { CouponOptions } from '../constants/enum';
import { setCouponCode, setCouponOptions } from '../store/coupon/couponAction';
import { CouponDataTypes } from '../store/coupon/couponType';
import { generateCoupon } from '../views/utilities/generateCoupon';

export const useCouponCode = () => {
  const [copy, setCopy] = useState<boolean>(false);
  const couponCode = useSelector(
    ({ couponData }: CouponDataTypes) => couponData.couponCode,
  );
  // const couponOptions = useSelector(
  //   ({ couponData }: CouponDataTypes) => couponData.couponOptions,
  // );

  const [couponOptions, setCouponOptions] = useState<string>(
    CouponOptions.TYPING,
  );
  const dispatch = useDispatch();
  const [couponError, setCouponError] = useState<boolean>(false);
  const activeCouponOptions = couponOptions === CouponOptions.TYPING;
  const copyCouponToClipBoard = async (text: string) => {
    if (text.length == 0) {
      setCopy(false);
      setCouponError(true);
    } else {
      setCouponError(false);
      setCopy(true);
      await navigator.clipboard.writeText(text);
    }
  };
  const handleRandomCoupon = () => {
    if (!activeCouponOptions) {
      setCopy(false);
      const randomCode = generateCoupon(10).toLocaleUpperCase();
      dispatch(setCouponCode(randomCode));
    }
  };

  const handleTypingCoupon = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (activeCouponOptions) {
      setCopy(false);
      dispatch(setCouponCode(event.target.value.toLocaleUpperCase()));
    }
  };

  const handleCopyIcon = () => {
    setCopy(true);
    copyCouponToClipBoard(couponCode);
  };

  const handleCouponOptionsClick = (type: string) => {
    setCopy(false);
    dispatch(setCouponCode(''));
    // dispatch(setCouponOptions(type));
    setCouponOptions(type);
  };

  return {
    activeCouponOptions,
    copy,
    couponCode,
    couponError,
    handleCopyIcon,
    handleCouponOptionsClick,
    handleRandomCoupon,
    handleTypingCoupon,
  };
};
