import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {dummyCartService} from "../../services/api.service.ts";
import {IProduct} from "../../models/user-carts-model/IProduct.ts";
import {IResponsProduct} from "../../models/user-carts-model/IResponsProduct.ts"




export const CartsComponent = () => {


    const {id} = useParams();
    const [carts, setCarts] = useState<IProduct[]>([]);
    useEffect(() => {
        if (id) {
            dummyCartService.getCartsOfUsers(id)
                .then(({products}: IResponsProduct) => {
                    setCarts(products);
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