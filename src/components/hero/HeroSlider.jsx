import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import './Hero.css'

const HeroSlider = () => {
  
  const { productList, setSelectedProduct } = useContext(UserContext);
  const navigate = useNavigate();
  const [liveIndex,setLiveIndex] = useState()
  const [val,setVal] = useState()
  const [defaultVal,setDefaultVal] = useState(0)
  const [translateVal, setTranslateVal] = useState(0)
  useEffect(() => {
    productList && setLiveIndex(Math.floor(productList.length/2))
    productList && setVal((productList.length - 1 - Math.floor(productList.length/2)) * 195)
    productList && productList.length % 2 === 0 && setDefaultVal(90) 
    productList && productList.length % 2 === 0 && setTranslateVal(translateVal-90)
  }, [productList])
  
  console.log('live index', liveIndex)

  return (
    <div className="hero-slider">
      <div className="choose-produkt">
        <div className="produkts-container">
          <div>
          <span className="left" onClick={(e)=>{
            e.preventDefault();
            liveIndex > 0 ? (
              setLiveIndex(liveIndex-1)
            ): (setLiveIndex(productList.length-1))
            liveIndex > 0 ? setTranslateVal(translateVal + 145): setTranslateVal(translateVal  - val - defaultVal)}}></span>
          <span className="right" onClick={(e)=>{
            e.preventDefault();
            liveIndex < productList.length-1 ? setLiveIndex(liveIndex+1): setLiveIndex(0)
            liveIndex < productList.length-1 ? setTranslateVal(translateVal - 145): 
            setTranslateVal(translateVal  + val + defaultVal)}}></span>
          </div>
          <div className="produkts" style={{transform : `translateX(${translateVal}px)`}}>
            {productList && productList.map((singleProduct, idx) => {
              return (
                <div
              className={`produkt-item ${idx=== liveIndex ? "current" : ""}`}
              style={{backgroundImage: `url(${singleProduct.image})`, backgroundSize: 'contain'}}
              onClick={(e)=>{
                e.preventDefault();
                setSelectedProduct(singleProduct)
                navigate("/product-page")
              }}
                
            >
              <span className={idx=== liveIndex ? "current" : ""} id="text-produkt">Choose</span>
            </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
