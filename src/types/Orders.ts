import { carttype } from "./Carts";

export interface Ordertype{
    id:string,
    name:string,
    city:string,
    cart:carttype[];
    quantity:number;
    totalamount:number;
}

export const Orders:Ordertype[]=[];