import {FC} from "react";
import {ICart} from "../../models/user-carts-model/ICart.ts";
import './CartComponent.css';

type PropsCard = {
    cart: ICart;
}

export const CartComponent:FC<PropsCard> = ({cart}) => {
    return (
        <>
            <div className={'cart'}>
                <p><b>UserId:</b> {cart.userId}</p>
                <p><b>Total products:</b> {cart.totalProducts}</p>
                <p><b>Total quantity:</b> {cart.totalQuantity}</p>
                <p><b>Discounted total: </b>{cart.discountedTotal}</p>
                <p><b>Total:</b> {cart.total}</p>
            </div>
        </>
    );
};