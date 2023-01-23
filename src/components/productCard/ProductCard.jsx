import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';
import { useNavigate } from "react-router-dom";
import './ProductCard.css'

const ProductCard = ({product}) => {
  const { setSelectedProduct } = useContext(UserContext);
  const navigate = useNavigate();
  const disc = product.discountPercentage*product.price/100;
  const discPrice = product.price-disc;
  return (
    <div className='card-styling' onClick={(e)=>{
      setSelectedProduct(product)
      navigate("/product-page")
    }}>
      {product && <>
        <img src={product.thumbnail} width= '250' height='350'/>
        <p className='prod-title'>{product.title}</p>
        <p><span className='new-price'>Rs.{discPrice}/- </span> <span className='actual-price'>Rs.{product.price}/-</span> <span className='discount'> {product.discountPercentage}% off</span></p>
      </>}
    </div>
  )
}

export default ProductCard