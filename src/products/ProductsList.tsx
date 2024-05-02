import { useContext } from "react";
import { TotalContext } from "../context/createcontext";
import EachProduct from "./EachProduct";
import "./Products.scss";
import { useNavigate } from "react-router-dom";

const ProductsList: React.FC = () => {
  const { productsdata } = useContext(TotalContext);
  const navigate =useNavigate();

  return (
    <div className="product-list-class">
      {productsdata.map((eachproduct) => {
        return <EachProduct eachproduct={eachproduct}></EachProduct>;
      })}
    </div>
  );
};

export default ProductsList;
