import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

const ProductSlider = () => {
  const { selectedProduct } = useContext(UserContext);
  return (
    <div>{selectedProduct && <>
      <img src={selectedProduct.image} width= '200' height='250'/>
      {/* <p>{selectedProduct.title}</p>
      <p>Rs.{selectedProduct.price}/-</p> */}
    </>}</div>
  )
}

export default ProductSlider