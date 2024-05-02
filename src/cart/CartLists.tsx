import { useContext, useEffect, useRef, useState } from "react";
import "./Cartlist.scss";
import { TotalContext } from "../context/createcontext";
import { carttype } from "../types/Carts";
import EachCartItem from "../eachCartItem/EachCartItem";
import { v4 as uuidv4 } from "uuid";
import image1 from "../assets/user.jpeg";
import { Placetype } from "../types/User";

const CartLists: React.FC = () => {
  const {
    totalCart,
    addToOrders,
    addCartToUser,
    userArray,
    makeNewCityArray,
    cityArray,
  } = useContext(TotalContext);
  const [newCartItems, setNewCartItems] = useState<carttype[]>([]);
  const [totalOrderValue, setTotalOrderValue] = useState<number>(0);
  const [userName, setUserName] = useState<string>(""); //takes input name
  const [placeDetails, setPlaceDetails] = useState<string>(""); //takes place of the user
  const [showinvalid, setShowInvalid] = useState<boolean>(false); //displayes whether given details are rigth?
  const [showButtonDisabled, setShowButtonDisabled] = useState<boolean>(false);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [whetherDisabled, setWhetherDisabled] = useState<boolean>(true);
  const [newCityArray, setNewCityArray] = useState<Placetype[]>([]);
  const [newIndex, setNewIndex] = useState<number>(0);
  const [newAddress, setNewAddress] = useState<boolean>(false);
  const [addressDisabled, setAddressDisabled] = useState<boolean>(false);
  const [newInputAddress, setInputAddress] = useState<string>("");
  const [newCity, setNewCity] = useState<string>("");

  //update every when a new item added to cart
  useEffect(() => {
    setNewCartItems([...totalCart]);
    setShowInvalid(false);
  }, [totalCart]);

  useEffect(() => {
    setNewCityArray([...cityArray]);
  }, [cityArray]);

  //total cart quantity
  useEffect(() => {
    let total = 0;
    newCartItems.map((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [newCartItems]);

  //update total value of the cart
  useEffect(() => {
    let total: number = 0;
    let totalQuantity1: number = 0;

    totalCart.map((item) => {
      total += item.price * item.quantity;
      totalQuantity1 += item.quantity;
    });
    setTotalOrderValue(total);
    setTotalQuantity(totalQuantity1);
  }, [totalCart]);

  //update button disable
  useEffect(() => {
    if (userName !== "") {
      setWhetherDisabled(false);
    }
  }, [userName, placeDetails]);
  // handles place order details
  const handlePlaceOrder = () => {
    if (userName !== "" && placeDetails !== "") {
      addToOrders({
        id: userArray[newIndex].id,
        name: userName,
        city: placeDetails,
        totalamount: totalOrderValue,
        quantity: totalQuantity,
        cart: newCartItems,
      });

      addCartToUser(
        {
          id: userArray[newIndex].id,
          name: userName,
          city: placeDetails,
          totalamount: totalOrderValue,
          quantity: totalQuantity,
          cart: newCartItems,
        },
        newIndex
      );

      setAddressDisabled(false);
    } else if (userName !== "" && newInputAddress !== "") {
      addToOrders({
        id: userArray[newIndex].id,
        name: userName,
        city: newInputAddress,
        totalamount: totalOrderValue,
        quantity: totalQuantity,
        cart: newCartItems,
      });

      addCartToUser(
        {
          id: userArray[newIndex].id,
          name: userName,
          city: newInputAddress,
          totalamount: totalOrderValue,
          quantity: totalQuantity,
          cart: newCartItems,
        },
        newIndex
      );

      setAddressDisabled(false);
    } else {
      setShowInvalid(true);
      console.log("Please fill all details");
    }
    setUserName("");
    setPlaceDetails("");
    setInputAddress("");
  };

  const handleUserChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleIndex = (index: number) => {
    setNewIndex(index);
    makeNewCityArray(index);
  };

  const handlePlaceDetails = (e: any) => {
    setPlaceDetails(e.target.value);
  };

  const handleNewAddress = () => {
    setAddressDisabled(true);
    setNewAddress(true);
    setPlaceDetails("");
  };

  const handleClose = () => {
    setAddressDisabled(false);
    setNewAddress(false);
  };

  return (
    <div className="cart-main-class">
      {newCartItems.length > 0 && (
        <div>
          <p className="cart-list-name">Cart Lists</p>

          <table className="table table-primary cart-class">
            {" "}
            {/* Bootstrap table */}
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sub</th>
                <th scope="col">Add</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {newCartItems.map((eachcartitem, index) => {
                return (
                  <EachCartItem
                    eachcartitem={eachcartitem}
                    index={index}
                  ></EachCartItem>
                );
              })}
            </tbody>
          </table>
          <p className="total-price-p">Total Price is {totalOrderValue}</p>

          <div>
            <div className="form-class">
              <select value={userName} onChange={(e) => handleUserChange(e)}>
                <option value="">select</option>

                {userArray.map((eachuser, index) => {
                  return (
                    <option
                      value={eachuser.name}
                      onClick={() => handleIndex(index)}
                    >
                      {eachuser.name}
                    </option>
                  );
                })}
              </select>

              <select
                value={placeDetails}
                onChange={(e) => handlePlaceDetails(e)}
                disabled={addressDisabled}
              >
                <option value="">select</option>
                {newCityArray.map((eachcity) => {
                  return (
                    <option value={eachcity.address}>{eachcity.city}</option>
                  );
                })}
              </select>
              <button
                onClick={() => handlePlaceOrder()}
                disabled={whetherDisabled}
              >
                Place Order
              </button>
              {showinvalid && (
                <p className="display-error-message">Please Add all details</p>
              )}
              <button onClick={() => handleNewAddress()}>
                Add new Address
              </button>
              {newAddress && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter new Address"
                    value={newInputAddress}
                    onChange={(e) => setInputAddress(e.target.value)}
                  ></input>{" "}
                  <input
                    type="text"
                    placeholder="Enter new city"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                  ></input>
                  <button onClick={() => handleClose()}> close</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartLists;
