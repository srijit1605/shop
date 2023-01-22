import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import ProductCard from "./ProductCard";

const CardCategories = () => {
  
  const { productList } = useContext(UserContext);
  return (
    <div style={{textAlign:'center'}}>
      <h2 style={{lineHeight:'350%'}}><span>Trending</span>T-shirts</h2>
      <section style={{display:'flex', gap: '40px', width: '100%', overflowX: 'scroll'}}>
        
      {productList && productList.map((singleProduct, idx) => {
              return (
        <ProductCard product={singleProduct}/>
        )
            })}
      </section>
      <h2 style={{lineHeight:'350%'}}><span>Trending</span>Sweatshirts</h2>
      <section style={{display:'flex', gap: '40px', width: '100%', overflowX: 'scroll'}}>
      
      {productList && productList.map((singleProduct, idx) => {
              return (
        <ProductCard product={singleProduct}/>
        )
            })}
      </section>
    </div>
  );
};

export default CardCategories;
