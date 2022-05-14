import React from "react";
import { backgroundImage } from "./assets/jpg";
import Container from "./component/container";
import Content from "./component/content";
import Header from "./component/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProduct from "./pages/all_Product";
import ProductDetailPage from "./pages/productDetails";
const STYLE = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function App() {
  return (
    <div className="w-screen h-screen overflow-auto" style={STYLE}>
      <Header />
        <Content>
          <Router>
            <Routes>
              <Route path="/" element={<AllProduct />} />
              <Route path="/:id" element={<ProductDetailPage />} />
            </Routes>
          </Router>
        </Content>
    </div>
  );
}

export default App;
