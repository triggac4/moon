import React from "react";
import { backgroundImage } from "./assets/jpg";
import Container from "./component/container";
import Content from "./component/content";
import Header from "./component/header/header";
import ProductComponent from "./component/products/product_component";
import ProductGrid from "./component/products/product_grid";
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
      <Container className="overflow-auto">
        <Content>
        <ProductDetailPage/>
        </Content>
      </Container>
    </div>
  );
}

export default App;
