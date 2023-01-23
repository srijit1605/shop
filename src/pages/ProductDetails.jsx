import React from "react";
import PDPCardSection from "../components/PDPCardSection";
import ProductDescription from "../components/ProductDescription";
import ProductSlider from "../components/ProductSlider";
import RecentSlider from "../components/recentSlider/RecentSlider";

const ProductDetails = () => {
  return (
    <div style={{ padding: "6rem" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <ProductSlider />
          <RecentSlider />
        </div>
        <div style={{ width: "38%" }}>
          <ProductDescription />
        </div>
      </div>
      <PDPCardSection />
    </div>
  );
};

export default ProductDetails;
