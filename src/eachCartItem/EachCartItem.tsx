import { useContext } from "react";
import "./EachCartItem.scss";
import { TotalContext } from "../context/createcontext";
import { carttype } from "../types/Carts";

interface EachItemProp {
  eachcartitem: carttype;
  index: number;
}
const EachCartItem: React.FC<EachItemProp> = ({ eachcartitem, index }) => {
  const {handleDecrement,handleDelete,handleIncrement} = useContext(TotalContext);

  return (
    <tr>
      <th scope="row">{eachcartitem.name}</th>
      <td>{eachcartitem.price*eachcartitem.quantity}</td>
      <td>{eachcartitem.category}</td>
      <td>{eachcartitem.quantity}</td>
      <td>
        <button onClick={() => handleDecrement(index)}>-</button>
      </td>
      <td>
        <button onClick={() => handleIncrement(index)}>+</button>
      </td>
      <td>
        <button onClick={()=>handleDelete(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default EachCartItem;