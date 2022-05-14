import React, { useEffect, useState } from "react";
import Card from "../component/ProductDetails/card";
import ProductDetailLayout from "../component/ProductDetails/productDetailLayout";

const ProductDetailPage = () => {
  
  return (
    <ProductDetailLayout>
      <Card rating={3.4}/>
      <Card/>
    </ProductDetailLayout>   
  );
};

export default ProductDetailPage;
