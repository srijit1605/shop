import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Carousel, { consts } from "react-elastic-carousel";
import { useState } from "react";
import { useEffect } from "react";

const ProductSlider = () => {
  const { selectedProduct } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState();
  const myArrow = ( type, onClick, isEdge ) => {
    const pointer = type === consts.PREV ? '' : ''
    return (
      <button style={{background:"#fff", border: 'none'}} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  useEffect(()=>{
    selectedProduct && setSelectedImage(selectedProduct.thumbnail)
  },[selectedProduct])
  return (
    <div>
      {selectedProduct && (
        <div style={{display:'flex'}}>
          <img src={selectedImage} width="450" height="540" />
          <Carousel
            itemsToScroll={2}
            itemsToShow={3}
            verticalMode 
            itemPadding={[5, 5]}
            renderArrow={myArrow}
            renderPagination={() => {
              return <div></div>;
            }}
          >
            {selectedProduct.images.map((singleimage) => (
              <div
                style={{ overflow: "hidden" }}
                onClick={(e) => {
                  setSelectedImage(singleimage);
                }}
              >
                <img src={singleimage} height="150" width='100' />
                <div
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    justifyContent: "space-between",
                    padding: "10px 5px",
                  }}
                >
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
