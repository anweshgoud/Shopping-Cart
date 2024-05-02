import { Link } from "react-router-dom";
import { Ordertype } from "../types/Orders";
import { BsThreeDotsVertical } from "react-icons/bs";
interface OrderDataProp {
  eachorder: Ordertype;
  index1: number;
}
const EachOrder: React.FC<OrderDataProp> = ({ eachorder, index1 }) => {
  return (

      <div className="order-class">
      <tr>
        <th scope="row">{eachorder.id}</th>
        <td>{eachorder.name}</td>
        <td>{eachorder.city}</td>
        <td>{eachorder.quantity}</td>
        <td>{eachorder.totalamount}</td>
        <td> <Link to={`/each-order/${eachorder.id}`} ><BsThreeDotsVertical /></Link></td>
      </tr>
      </div>

    
  );
};

export default EachOrder;
