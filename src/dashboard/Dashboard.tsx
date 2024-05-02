import { useContext, useEffect, useState } from "react";
import { TotalContext } from "../context/createcontext";
import "./Dashboard.scss";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { productsdata, userArray, orderArray } = useContext(TotalContext);

  const [productsCount, setProductCount] = useState<number>(0);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [ordersCount, setOrdersCount] = useState<number>(0);

  useEffect(() => {
    setOrdersCount(orderArray.length);
    setProductCount(productsdata.length);
    setUsersCount(userArray.length);
  }, [productsdata, userArray, orderArray]);

  return (
    <div className="dashboard-class">
      <Link to="/Products" style={{ textDecoration: "none", color: "black" }}>
        <div className="each-box-class">
          <div>
            <p>Products:</p>
            <p>{productsCount}</p>
          </div>
        </div>
      </Link>

      <Link to="/Users" style={{ textDecoration: "none", color: "black" }}>
        <div className="each-box-class">
          <div>
            <p>Users</p>
            <p>{usersCount}</p>
          </div>
        </div>
      </Link>

      <Link to="/Orders" style={{ textDecoration: "none", color: "black" }}>
        <div className="each-box-class">
          <div>
            <p>Orders:</p>
            <p>{ordersCount}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
