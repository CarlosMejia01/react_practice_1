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
    // }
];
export const CartApp = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1
            //     }
            // ])
            setCartItems(
                cartItems.map((i) => {
                    if (i.product.id == product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            );
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }
    };
    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    };
    return (
        <>
            <div className="container">
                <h1>Cart App</h1>
                <CatalogView handler={handlerAddProductCart} />
                {cartItems?.length <= 0 || 
                (
                    <div className="my-4 w-50">
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                    </div>
                )}
            </div>
        </>
    )
};