import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  data?: Record<string, any>;
};

const ProductDetails = ({ data }: Props) => {
  const selector = useSelector((state: any) => state.productData);
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    setProductDetail(selector.productDetails);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        { JSON.stringify(productDetail) }
      </div>
    </>
  )
}

export default ProductDetails;