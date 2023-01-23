import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import './ProductDescription.css'
import $ from 'jquery';

const ProductDescription = () => {
  const { selectedProduct } = useContext(UserContext);
  $(document).ready(function() {
    var cartCountValue = 0;
    var cartCount = $('.cart .count');
    $(cartCount).text(cartCountValue);
  
    $('.cart-btn').on('click', function() {
      var cartBtn = this;
      var cartCountPosition = $(cartCount).offset();
      var btnPosition = $(this).offset();
      var leftPos =
        cartCountPosition.left < btnPosition.left
          ? btnPosition.left - (btnPosition.left - cartCountPosition.left)
          : cartCountPosition.left;
      var topPos =
        cartCountPosition.top < btnPosition.top
          ? cartCountPosition.top
          : cartCountPosition.top;
      $(cartBtn)
        .append("<span class='count'>1</span>");
      
      $(cartBtn).find(".count").each(function(i,count){
        $(count).offset({
          left: leftPos,
          top: topPos
        })
        .animate(
          {
            opacity: 0
          },
          800,
          function() {
            $(this).remove();
            cartCountValue++;
            $(cartCount).text(cartCountValue);
          }
        );
      }); 
    });
  });
  return (
    <div>
      {selectedProduct && (
        <>
          <h1
            style={{
              color: "#656565",
              fontWeight: "800",
              textTransform: "uppercase",
            }}
          >
            {selectedProduct.title}
          </h1>
          <p
            style={{
              color: "#990100",
              textTransform: "Capitalize",
              fontSize: "20px",
            }}
          >
            {selectedProduct.category}
          </p>
          <p>
            <span
              style={{ color: "#656565", fontWeight: "800", fontSize: "32px" }}
            >
              Rs.
              {selectedProduct.price -
                (
                  (selectedProduct.discountPercentage * selectedProduct.price) /
                  100
                ).toFixed(2)}
              /-{" "}
            </span>{" "}
            <span
              style={{
                color: "#989898",
                fontWeight: "600",
                fontSize: "26px",
                textDecoration: "line-through",
              }}
            >
              Rs.{selectedProduct.price}/-
            </span>{" "}
            <span
              style={{ color: "#9fbf60", fontWeight: "600", fontSize: "25px" }}
            >
              {selectedProduct.discountPercentage}% off
            </span>
          </p>
          <p style={{ color: "#323232", fontWeight: "600", fontSize: "22px" }}>COLORS</p>
          <p style={{ color: "#323232", fontWeight: "600", fontSize: "22px" }}>SIZE</p>
          <p style={{ color: "#323232", fontWeight: "600", fontSize: "22px" }}>QUANTITY</p>

          <div className="container">
          <button className="buy-btn">BUY NOW</button>
      <button className="cart-btn">ADD TO CART</button>
      <div className="cart">
      <i className="bi-cart3 spacing" style={{fontSize: '2rem', color: '#656565'}}></i>
        <span className="count">10</span>
      </div>
    </div>
        </>
      )}
    </div>
  );
};

export default ProductDescription;
