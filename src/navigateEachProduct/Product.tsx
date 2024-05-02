import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../types/Products";
import { TotalContext } from "../context/createcontext";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./Product.scss";

const Product: React.FC = () => {
  const { id } = useParams();
  const { productsdata, addCartData, newProductData } = useContext(TotalContext);
  const [newProduct, setNewProduct] = useState<ProductType>(newProductData);
  const navigate = useNavigate();

  useEffect(() => {
    setNewProduct(productsdata[Number(id) - 1]);
  }, [id, productsdata]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleCart = () => {
    addCartData({ ...newProduct, quantity: 1 });
  };

  return (
    <div className="product-container">
      <div className="button-container">
        <button onClick={() => handleBack()}>Back</button>
        <button onClick={() => navigate('/carts')}>Go to Cart</button>
      </div>
      <div className="product-box">
        <div className="image-container">
          <img src={newProduct.image} alt={newProduct.name} />
        </div>
        <div className="details-container">
          <p>Name: {newProduct.name}</p>
          <p>Category: {newProduct.category}</p>
          <p>Price: {newProduct.price}</p>
          <p>Description: {newProduct.description}</p>
          <button onClick={() => handleCart()}>Add to Cart</button>
        </div>
        
      </div>
      <p className="p-class">Swipe to see images</p>
      <div className="carousel-class">
      <Carousel showArrows={true} showThumbs={false} dynamicHeight={false} infiniteLoop={true}>
        {newProduct.imagesArray.map((eachItem, index) => (
          <div key={index} className="each-image-class">
            <img src={eachItem} alt={`Image ${index}`}/>
          </div>
        ))}
      </Carousel>
      
      </div>
    </div>
  );
};

export default Product;
