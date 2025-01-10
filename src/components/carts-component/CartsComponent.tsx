import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {dummyCartService} from "../../services/api.service.ts";
import {IResponsProduct} from "../../models/user-carts-model/IResponsProduct.ts"
import {ICart} from "../../models/user-carts-model/ICart.ts";


export const CartsComponent = () => {


    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if (id) {
            dummyCartService.getCartsOfUsers(id)
                .then((carts: IResponsProduct) => {
                    setCarts(carts.carts);
                })
        }

    }, [id]);
    return (
        <>
            <div>
                {
                    carts.map(cart => <CartComponent key={cart.id} cart={cart}/>)
                }
            </div>
        </>
    );
};