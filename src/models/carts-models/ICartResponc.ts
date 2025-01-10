import {ICart} from "./ICart.ts";

export interface ICartResponc {
    total: number;
    skip: number;
    limit: number;
    cart: ICart[];
}