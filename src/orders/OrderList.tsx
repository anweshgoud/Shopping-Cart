import { useContext, useEffect, useState } from "react";

import "./Orders.scss";
import { TotalContext } from "../context/createcontext";
import { Ordertype } from "../types/Orders";
import { Link } from "react-router-dom";
import "./Orders.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const OrdersList: React.FC = () => {
  const { orderArray } = useContext(TotalContext);

  const [newOrderArray,setNewOrderArray]=useState<Ordertype[]>([]);

  useEffect(()=>{
    setNewOrderArray(orderArray)
  },[orderArray])

  //renders only when length of the order is greater than 0
  return (
    <>
    {newOrderArray.length==0 && <p style={{margin:"300px",fontSize:"2rem"}}>Your Orders list is Empty</p>}
      {newOrderArray.length > 0 && (
        <div className="order-class">
          <p >Orders Lists</p>
          <table className="table table-primary orders-class"> {/* bootstrap  table */}
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Place</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Get Details</th>
              </tr>
            </thead>
            <tbody>
              {newOrderArray.map((eachorder,index) => {
                return (<tr>
                
                <th scope="row">{eachorder.id}</th>
                <td>{eachorder.name}</td>
                <td>{eachorder.city}</td>
                <td>{eachorder.quantity}</td>
                <td>{eachorder.totalamount}</td>
                <td><Link to={`/each-order/${eachorder.id}`} ><BsThreeDotsVertical /></Link></td>
              </tr>)
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default OrdersList;