import { ProductType } from "./Products";

export interface carttype extends ProductType{
    quantity:number;
}

export const cart:carttype[]=[];