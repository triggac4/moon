import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductComponent from "../component/products/product_component";
import ProductGrid from "../component/products/product_grid";
import ApiConsumption from "../utils/apiConsumption";

const AllProduct = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    ApiConsumption.getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <ProductGrid>
      {products&& products.map((product, index) => {
        return (
          <Link key={index} to={product?.MoonpigProductNo}>
            <ProductComponent
              price={`${product?.Price.Currency}${product?.Price?.Value}`}
              onAdd={() => {}}
              image={product?.ProductImage?.Link?.Href}
              name={product?.Title}
              rating={product?.Reviews?.AverageStarReviewRating}
            />
          </Link>
        );
      })}
    </ProductGrid>
  );
};

export default AllProduct;
