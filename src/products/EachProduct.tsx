import { Link } from "react-router-dom";
import { ProductType } from "../types/Products";
import "./Products.scss";

interface EachProductProp {
  eachproduct: ProductType;
}

const EachProduct: React.FC<EachProductProp> = ({ eachproduct }) => {
  return (
    <div className="product-item">
      <Link to={`/Product/${eachproduct.id}`}>
        <div className="product-details">
          <span>Product Name : {eachproduct.name}</span>
          <span>Price : {eachproduct.price}</span>
        </div>
      </Link>
    </div>
  );
};

export default EachProduct;
