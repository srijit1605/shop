import React, { useContext } from 'react'
import { UserContext } from '../UserContext';
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const { setSelectedProduct } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div onClick={(e)=>{
      setSelectedProduct(product)
      navigate("/product-page")
    }}>
      {product && <>
        <img src={product.image} width= '200' height='250'/>
        <p>{product.title}</p>
        <p>Rs.{product.price}/-</p>
      </>}
    </div>
  )
}

export default ProductCard