import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TotalContext } from "../context/createcontext";
import { Ordertype } from "../types/Orders";
import "./NavigateEachOrder.scss";

const NavigateEachOrder: React.FC = () => {
  const navigate = useNavigate();
  const index1 = useParams();
  const { eachOrder, orderArray } = useContext(TotalContext);
  const [newEachOrder, setEachOrder] = useState<Ordertype>(eachOrder);
  const [newOrderArray, setNewOrderArray] = useState<Ordertype[]>(orderArray);

  useEffect(() => {
    setNewOrderArray([...orderArray]);
  }, [Number(index1), orderArray]);

  useEffect(() => {
    newOrderArray.map((eachorder) => {
      if (eachorder.id === index1.index1) {
        setEachOrder(eachorder);
      }
    });
  }, [newOrderArray]);

  const handleButton = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => handleButton()}>
        Back to Orders
      </button>
      <div className="order-details">
        <p className="customer-name">Brought by: {newEachOrder.name}</p>
        <table className="order-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {newEachOrder.cart.map((eachcartitem) => {
              return (
                <tr key={eachcartitem.id}>
                  <td>{eachcartitem.name}</td>
                  <td>{eachcartitem.price * eachcartitem.quantity}</td>
                  <td>{eachcartitem.category}</td>
                  <td>{eachcartitem.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NavigateEachOrder;
