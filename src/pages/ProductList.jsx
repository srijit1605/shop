import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import About from "../components/about/About";
import AppPromo from "../components/AppPromo";
import CardCategories from "../components/CardCategories";
import DealSlider from "../components/DealSlider";
import Hero from "../components/hero/Hero";
import PeopleSlider from "../components/PeopleSlider";
import Services from "../components/Services";
import "./Pages.css";

const ProductList = () => {
  const { productList } = useContext(UserContext);
  return (
    <>
      <Hero />
      <div className="page-layout">
        <CardCategories />
        <DealSlider />
        <PeopleSlider />
        <AppPromo />
        <About />
        <Services />
      </div>
    </>
  );
};

export default ProductList;
