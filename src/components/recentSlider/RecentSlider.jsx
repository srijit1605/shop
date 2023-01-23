import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import './RecentSlider.css'

const RecentSlider = () => {
  const { productList, setSelectedProduct } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div>
      <h3 style={{padding: '3rem 0', margin:'0'}}>RECENTLY VIEWED</h3>
      {productList && (
        <Carousel
          itemsToScroll={2}
          itemsToShow={3}
          itemPadding={[10, 10]}
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
              <img src={singleProduct.thumbnail} height="250" />
              <div style={{display:'flex', fontSize:'12px', justifyContent:'space-between', padding: '10px 5px'}}>
              <p>{singleProduct.title}</p>
              <p>Rs. {singleProduct.price}/-</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default RecentSlider;
