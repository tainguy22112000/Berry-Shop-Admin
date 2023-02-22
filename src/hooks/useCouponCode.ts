import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CouponOptions } from '../constants/enum';
import { SET_COUPON_CODE } from '../store/coupon/couponAction';
import { generateCoupon } from '../views/utilities/generateCoupon';

export const useCouponCode = () => {
  const [copy, setCopy] = useState<boolean>(false);
  const [couponCode, setCouponCode] = useState<string>('');
  const dispatch = useDispatch();
  const [couponOptions, setCouponOptions] = useState<string>(
    CouponOptions.TYPING,
  );
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
      // setCouponCode(randomCode);
      dispatch({ type: SET_COUPON_CODE, payload: randomCode });
    }
  };

  const handleTypingCoupon = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (activeCouponOptions) {
      setCopy(false);
      dispatch({
        type: SET_COUPON_CODE,
        payload: event.target.value.toLocaleUpperCase(),
      });
      setCouponCode(event.target.value.toLocaleUpperCase());
    }
  };

  const handleCopyIcon = () => {
    setCopy(true);
    copyCouponToClipBoard(couponCode);
  };

  const handleCouponOptionsClick = (type: string) => {
    setCopy(false);
    setCouponCode('');
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
