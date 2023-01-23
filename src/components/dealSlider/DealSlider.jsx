import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import './DealSlider.css'

const DealSlider = () => {
  const { productList, setSelectedProduct } = useContext(UserContext);
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 750, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="size-adjust" style={{background:'#f4f4f4'}}>
      <h2 style={{textAlign:'center', lineHeight:'200%'}}>Trending Deals</h2>
      {productList && (
        <Carousel
          itemsToScroll={2}
          itemsToShow={4}
          breakPoints={breakPoints}
          itemPadding={[10, 5]}
          renderPagination={() => {
            return (
              <div></div>
            )
          }}
        >
          {productList.map((singleProduct) => (
            <div style={{overflow:'hidden'}}
              onClick={(e) => {
                setSelectedProduct(singleProduct);
                navigate("/product-page");
              }}
              key={singleProduct.id}
            >
              <img src={singleProduct.thumbnail} height="300" />
              <div className='deal-ribbon'>{singleProduct.discountPercentage}% off</div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default DealSlider;
