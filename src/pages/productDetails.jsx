import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../component/ProductDetails/card";
import DetailsWriteUp from "../component/ProductDetails/detailsWriteUps";
import ProductDetailLayout from "../component/ProductDetails/productDetailLayout";
import ApiConsumption from "../utils/apiConsumption";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const location=useLocation();
  useEffect(() => {
    ApiConsumption.getProduct(location.pathname.split("/")[1]).then((res) => {
      console.log("res", res);
      if (res) {
        setProduct(res);
      }
    });
  }, []);
  return (
    <>
      {product ? (
        <ProductDetailLayout>
          <Card
            inStock={product?.InStock}
            img={product?.ImageUrls[0]?.ImageUrl}
            price={"$50"}
          />
          <DetailsWriteUp
            title={product?.Title}
            description={product?.Description}
            onBuy={() => {}}
          />
        </ProductDetailLayout>
      ) : (
        <div className="h-full flex items-center bg-cyan-100 justify-center text-cyan-900">
          Loading...
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
