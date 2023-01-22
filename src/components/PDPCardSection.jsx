import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import ProductCard from "./ProductCard";

const PDPCardSection = () => {
  const { productList } = useContext(UserContext);
  return (
    <div>
      <h3>YOU MIGHT BE INTERESTED IN</h3>
      <section style={{display:'flex', gap: '40px', width: '100%', overflowX: 'scroll'}}>
        
      {productList && productList.map((singleProduct, idx) => {
              return (
        <ProductCard product={singleProduct}/>
        )
            })}
      </section>
      <h3>SIMILAR PRODUCTS</h3>
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

export default PDPCardSection