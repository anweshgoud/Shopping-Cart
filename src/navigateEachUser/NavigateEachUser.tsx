import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Usertype } from "../types/User";
import { TotalContext } from "../context/createcontext";
import "./NavigateEachUser.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavigateEachUser: React.FC = () => {
  const navigate = useNavigate();
  const index1 = useParams();

  const { newUser, userArray, addNewAddress } = useContext(TotalContext);
  const [newUser1, setNewUser1] = useState<Usertype>(newUser);
  const [newUserArray, setNewUserArray] = useState<Usertype[]>(userArray);
  const [totalAmountSpent, setNewTotalAmountSpent] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<string>("");
  const [newCity, setNewCity] = useState<string>("");

  useEffect(() => {
    setNewUserArray([...userArray]);
    let total = 0;
    newUserArray.map((eachitem) => {
      eachitem.cartArray.map((item) => {
        total += item.totalamount;
      });
    });
    setNewTotalAmountSpent(total);
  }, [userArray]);

  useEffect(() => {
    newUserArray.map((eachUser) => {
      if (eachUser.id === index1.index1) {
        setNewUser1(eachUser);
      }
    });
  }, [newUserArray]);

  const handleButton = () => {
    navigate(-1);
  };

  const handleNewAddress = () => {
    if (newAddress !== "" && newCity !== "") {
      addNewAddress(newUser1, newAddress, newCity);
      setNewAddress("");
      setNewCity("");
      setShowButton(false);
    }
    else{
      console.log("Please fill")
    }
  };

  return (
    <div className="user-details-container">
      <div className="back-button">
        <button onClick={() => handleButton()}>Back to Users</button>
      </div>
      <div className="user-info">
        <div className="user-image">
          <img src={newUser1.image} alt={newUser1.name} />
        </div>
        <div className="user-details">
          <h2>{newUser1.name}</h2>
          <p>Email: {newUser1.mail}</p>
          <p>Total Amount Spent:{totalAmountSpent} </p>
        </div>

        <div>
          <p>Address</p>
          {newUser1.place.map((items) => {
            return (
              <p>
                {items.address}, {items.city}
              </p>
            );
          })}
        </div>
      </div>
      <button onClick={() => setShowButton(true)}>Add new Address</button>
      {showButton && (
        <div>
          <input
            type="text"
            placeholder="Enter new Address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Enter new city"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          ></input>
          <button onClick={() => handleNewAddress()}>Submit</button>
          <button onClick={() => setShowButton(false)}>Close</button>
        </div>
      )}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Get Details</th>
            </tr>
          </thead>
          <tbody>
            {newUser1.cartArray.map((eachcartitem) => (
              <tr>
                <td>{eachcartitem.id}</td>
                <td>{eachcartitem.name}</td>
                <td>{eachcartitem.totalamount}</td>
                <td>{eachcartitem.quantity}</td>
                <td>
                  {" "}
                  <Link
                    key={eachcartitem.id}
                    to={`/each-order/${eachcartitem.id}`}
                    className="order-link"
                    style={{ textDecoration: "underline" }}
                  >
                    <BsThreeDotsVertical />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NavigateEachUser;
