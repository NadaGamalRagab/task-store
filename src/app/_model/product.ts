import { paymentTypes } from "./payment-type";
import { productCategory } from "./product-category";
import { ProductLang } from "./product-lang";
import { Tages } from "./tages";

export interface Product{
    _id: string;
    id?: number,
    data?: ProductLang[], 
    price?: number,
    discount?: number,//?means it's nullable 
    imagesUrls?: string[];
    paymentTypes?: paymentTypes[];
    category?: productCategory;
    tages?: Tages[];
}