import { useState } from "react";
import { Products, ProductType } from "../types/Products";
import { TotalContext } from "./createcontext";
import { carttype } from "../types/Carts";
import { Orders, Ordertype } from "../types/Orders";
import { Placetype, User, UsersData, Usertype } from "../types/User";
import OrdersList from "../orders/OrderList";

const TotalContext1: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const newitem: carttype = {
    id: "1",
    name: "",
    category: "",
    price: 0,
    description: "",
    quantity: 0,
    image: "",
    imagesArray:[],
  };

  const newProductItem: ProductType = {
    id: "1",
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
    imagesArray:[],
  };
  const neworder:Ordertype={
    id:"",
    name:"",
    city:"",
    cart:[],
    quantity:0,
    totalamount:0,
  }
  const newUserType:Usertype={
    id:"",
    name:"",
    place:[],
    AmountSpent:0,
    mail:"",
    image:"",
    quantity:0,
    cartArray:[]
  }

  const [productsdata, setProductsData] = useState<ProductType[]>(Products);
  const [totalCart, setTotalCartItems] = useState<carttype[]>([]);
  const [newCartData, setNewCartData] = useState<carttype>(newitem);
  const [orderArray, setOrderArray] = useState<Ordertype[]>(Orders);
  const [newProductData, setNewProductData] =
    useState<ProductType>(newProductItem);
  const [newUser,setNewUser]=useState<Usertype>(newUserType);
  const [eachOrder,setEachOrder]=useState<Ordertype>(neworder);
  const [userArray,setUser]=useState<Usertype[]>(User);
  const [cityArray,setCityArray]=useState<Placetype[]>([]);
  const [newOrder,setNewOrder]=useState<Ordertype>(neworder);

  const addCartData = (cart: carttype) => {
    let find: boolean = false;
    const newCartArray: carttype[] = totalCart.map((cartitems) => {
      if (cartitems.id === cart.id) {
        find = true;
        return { ...cartitems, quantity: cartitems.quantity + 1 };
      }
      return cartitems;
    });
    if (find === false) {
      newCartArray.push({ ...cart, quantity: 1 });
    }
    setTotalCartItems([...newCartArray]);
  };

  const addToOrders = (ord: Ordertype) => {
    setNewOrder(ord);
    setOrderArray([...orderArray, ord]);
    setTotalCartItems([]);
  };


  const handleIncrement = (index: number) => {
    const newArray: carttype[] = totalCart.map((eachcart, index1) => {
      if (index1 === index) {
        return { ...eachcart, quantity: eachcart.quantity + 1 };
      }
      return eachcart;
    });
    setTotalCartItems([...newArray]);
  };

  const handleDecrement = (index: number) => {
    const newArray: carttype[] = [...totalCart];
    newArray[index].quantity -= 1;
    if (newArray[index].quantity === 0) {
      newArray.splice(index, 1);
    }
    setTotalCartItems([...newArray]);
  };

  const handleDelete = (index: number) => {
    const newArray: carttype[] = totalCart.filter(
      (item, index1) => index1 !== index
    );
    setTotalCartItems([...newArray]);
  };

  const addCartToUser=(ord:Ordertype,index1:number)=>{
    const newUsers:Usertype[]=[...userArray];
    newUsers[index1].cartArray.push(ord);

    setUser([...newUsers]);

  }

  const [status,setStatus] = useState<boolean>(true);

  const makeNewCityArray=(index:number)=>{
    const newarray:Placetype[]=userArray[index].place;
    setCityArray([...newarray]);
  }

  const addNewAddress=(User:Usertype,address1:string,city1:string)=>{
    console.log(User);

    const users:Usertype[]=userArray.map((item)=>{
      if(item.id===User.id){
        return {...item,place:[...item.place,{address:address1,city:city1}]};
      }
      return item;
    })
    setUser([...users]);
  }

  const handleStatus = () => {
    let stat = status;
    if(stat){
      stat = false
    }
    else{
      stat = true
    }
    setStatus(stat);
  }

  const handleAddNewAddress=(address:string,city:string,index:number)=>{

    

  }


  return (
    <>
      <TotalContext.Provider
        value={{
          productsdata,
          totalCart,
          newCartData,
          newProductData,
          orderArray,
          addCartData,
          handleDecrement,
          handleDelete,
          handleIncrement,
          addToOrders,
          eachOrder,
          newUser,
          addCartToUser,
          userArray,
          cityArray,
          makeNewCityArray,
          addNewAddress,
          status,
          handleStatus,
          handleAddNewAddress,
        }}
      >
        {children}
      </TotalContext.Provider>
    </>
  );
};

export default TotalContext1;
