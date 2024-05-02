import { createContext } from "react";
import { ProductType } from "../types/Products";
import { carttype } from "../types/Carts";
import { Ordertype } from "../types/Orders";
import { Placetype, Usertype } from "../types/User";

const newitem:carttype={
    id:"1",
    name:"",
    category:"",
    price:0,
    description:"",
    quantity:0,
    image:"",
    imagesArray:[]
}

const newProductItem:ProductType={
    id:"1",
    name:"",
    category:"",
    price:0,
    description:"",
    image:"",
    imagesArray:[]
}

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
  cartArray:[],
}

export interface ContextPropTypes {
  productsdata: ProductType[];
  totalCart: carttype[];
  newCartData:carttype;
  newProductData:ProductType;
  orderArray:Ordertype[]
  addCartData: (cart: carttype) => void;
  handleIncrement: (index: number) => void;
  handleDecrement: (index: number) => void;
  handleDelete: (index: number) => void;
  addToOrders:(ord:Ordertype)=>void;
  eachOrder:Ordertype;
  newUser:Usertype;
  addCartToUser:(ord:Ordertype,index:number)=>void;
  userArray:Usertype[];
  cityArray:Placetype[];
  makeNewCityArray:(index:number)=>void;
  addNewAddress:(id:Usertype,address:string,city:string)=>void;
  status : boolean;
  handleStatus : () => void;
  handleAddNewAddress:(address:string,city:string,index:number)=>void;
}



export const TotalContext = createContext<ContextPropTypes>({
  productsdata: [],
  totalCart: [],
  orderArray:[],
  addCartData: () => {},
  handleDecrement: () => {},
  handleDelete: () => {},
  handleIncrement: () => {},
  addToOrders:()=>{},
  newCartData: newitem,
  newProductData:newProductItem,
  eachOrder:neworder,
  newUser:newUserType,
  addCartToUser:()=>{},
  userArray:[],
  cityArray:[],
  makeNewCityArray:()=>{},
  addNewAddress:()=>{},
  status: true,
  handleStatus : () => {},
  handleAddNewAddress:()=>{},

});


