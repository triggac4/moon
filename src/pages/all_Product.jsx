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
    <ProductGrid>
      {products.map((product, index) => {
        return (
          <ProductComponent
            key={index}
            price={`${product?.Price.Currency}${product?.Price?.Value}`}
            onAdd={() => {}}
            image={product?.ProductImage?.Link?.Href}
            name={product?.Title}
            rating={product?.Reviews?.AverageStarReviewRating}
          />
        );
      })}
    </ProductGrid>
  );
};

export default AllProduct;
