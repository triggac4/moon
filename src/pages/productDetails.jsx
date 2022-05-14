import React, { useEffect, useState } from "react";
import ProductComponent from "../component/products/product_component";
import ProductGrid from "../component/products/product_grid";
import ApiConsumption from "../utils/apiConsumption";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ApiConsumption.getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    
  );
};

export default AllProduct;
