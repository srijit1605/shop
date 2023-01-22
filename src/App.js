import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import { UserContext } from "./UserContext";

function App() {
  const [productList, setProductList] = useState()
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      const shopData = response.data;
      setProductList(shopData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('response', productList, 'lol', selectedProduct);

  return (
    <BrowserRouter>
      <div>
        <UserContext.Provider
          value={{
            selectedProduct,
            setSelectedProduct,
            productList, 
            setProductList
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product-page" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
