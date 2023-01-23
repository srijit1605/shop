import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import ProductCard from "./productCard/ProductCard";
import Carousel, { consts } from "react-elastic-carousel";

const CardCategories = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 750, itemsToShow: 3 },
    { width: 950, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  const myArrow = ( type, onClick, isEdge ) => {
    const pointer = type === consts.PREV ? '' : ''
    return (
      <button style={{background:"#fff", border: 'none'}} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  const { productList } = useContext(UserContext);
  return (
    <div style={{textAlign:'center'}}>
      <h2 style={{lineHeight:'350%'}}><span>Trending</span>T-shirts</h2>
      <section>
      {productList && (
        <Carousel
          itemsToScroll={2}
          itemsToShow={4}
          breakPoints={breakPoints}
          itemPadding={[10, 30]}
          renderArrow={myArrow}
          enableAutoPlay 
          autoPlaySpeed={1500}
          renderPagination={() => {
            return (
              <div></div>
            )
          }}
        >
          {productList.map((singleProduct) => (
            <div
              key={singleProduct.id}
            >
              <ProductCard product={singleProduct}/>
            </div>
          ))}
        </Carousel>
      )}
      </section>
      <h2 style={{lineHeight:'350%'}}><span>Trending</span>Sweatshirts</h2>
      <section>
      {productList && (
        <Carousel
          itemsToScroll={2}
          itemsToShow={4}
          breakPoints={breakPoints}
          itemPadding={[10, 30]}
          renderArrow={myArrow}
          enableAutoPlay 
          autoPlaySpeed={1500}
          renderPagination={() => {
            return (
              <div></div>
            )
          }}
        >
          {productList.map((singleProduct) => (
            <div
              key={singleProduct.id}
            >
              <ProductCard product={singleProduct}/>
            </div>
          ))}
        </Carousel>
      )}
      </section>
    </div>
  );
};

export default CardCategories;
