import { DiscountOffers } from "./discount-offers";
export interface IProduct {
    id:number;
    name:string;
    price:number;
    quantity:number;
    img:string;
    categoryId:number;
    dis:DiscountOffers;
}

