import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import './PeopleSlider.css'

const PeopleSlider = () => {
  const { productList, setSelectedProduct } = useContext(UserContext);
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 750, itemsToShow: 3 },
    { width: 950, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div style={{padding:'1rem 4rem'}}>
      <h2 style={{lineHeight:'250%', textAlign:'center'}}>Craving People</h2>
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
            <div style={{overflow: 'hidden'}}
              onClick={(e) => {
                setSelectedProduct(singleProduct);
                navigate("/product-page");
              }}
              key={singleProduct.id}
            >
              <img src={singleProduct.images[0]} height="300" />
              <ul className="bottom-desc"><li><span style={{color: '#fff'}}>{singleProduct.description}</span></li></ul>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default PeopleSlider;
