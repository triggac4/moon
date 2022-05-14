import React, { useEffect, useState ,useRef} from "react";
import { Link } from "react-router-dom";
import DarkButton from "../component/buttons/darkButton";
import SearchForm from "../component/form/searchPage";
import ProductComponent from "../component/products/product_component";
import ProductGrid from "../component/products/product_grid";
import ApiConsumption from "../utils/apiConsumption";

const AllProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [productFilter,setProductFilter]=useState(false);
  const ref = useRef("");
  const [limit, setLimiter] = useState(12);
  useEffect(() => {
    ApiConsumption.getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  const filter=(val,index)=>{
    if(!ref.current.trim()){
      return true;
    }
    else if(val?.Title.toLowerCase().includes(ref.current.toLowerCase().trim())){
      return true;
    }
    return false;
  }

  const handleSubmit=()=>{
    setProductFilter((prev)=>!prev);
  }
  return (
    <>
      <div className="flex mt-10 sm:mt-0  mb-4 justify-end">
          <SearchForm ref={ref} onSubmit={handleSubmit} />
      </div>
      <ProductGrid>
        {products &&
          products.filter(filter).slice(0,limit).map((product, index) => {
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
      <div className="flex mt-4 flex-col items-center">
      <DarkButton onClick={()=>{
        if(limit+12>products.length){
          setLimiter(products.length)
        }
        else{
          setLimiter(limit+12)
        }
      }}>Load More</DarkButton>
      </div>
    </>
  );
};

export default AllProduct;
