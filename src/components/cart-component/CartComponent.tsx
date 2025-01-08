import {FC} from "react";
import {IProduct} from "../../models/user-carts-model/IProduct.ts";


type PropsCard = {
    cart: IProduct;
}

export const CartComponent:FC<PropsCard> = ({cart}) => {
    return (
        <>
            <div>{cart.total}</div>
        </>
    );
};