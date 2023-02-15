import React from "react";
type Props = {
  data?: Record<string, any>;

};


const ProductDetails = ({ data }: Props) => {
  return (
    <>
      <div>
         { JSON.stringify(data) }
      </div>
    </>
  )
}

export default ProductDetails;