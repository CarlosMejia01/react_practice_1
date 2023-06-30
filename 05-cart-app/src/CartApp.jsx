import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [
    // {
    //     product: {
    //         id: 1,
    //         name: 'Mechanical keyboard RGB',
    //         description: 'Mechanical keyboard with rgb lights cherry red switches',
    //         price: '1000',
    //     },
    //     quantity: 0,
    //     total: 0
    // }
];
export const CartApp = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const handlerAddProductCart = (product) => {

    };
    return (
        <>
            <div className="container">
                <h1>Cart App</h1>
                <CatalogView />
                <div className="my-4 w-50">
                    <CartView items={cartItems} />
                </div>
            </div>
        </>
    )
};