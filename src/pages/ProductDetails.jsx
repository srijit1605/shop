import React from "react";
import PDPCardSection from "../components/PDPCardSection";
import ProductDescription from "../components/ProductDescription";
import ProductSlider from "../components/ProductSlider";
import RecentSlider from "../components/RecentSlider";

const ProductDetails = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "48%" }}>
          <ProductSlider />
          <RecentSlider />
        </div>
        <div style={{ width: "48%" }}>
          <ProductDescription />
        </div>
      </div>
      <PDPCardSection />
    </div>
  );
};

export default ProductDetails;
