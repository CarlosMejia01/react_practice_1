import { useReducer, useEffect } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemActionTypes } from "./reducer/itemsActions";
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
export const CartApp = () => {
    // const [cartItems, setCartItems] = useState(initialCartItems);
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

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

            // setCartItems(
            //     cartItems.map((i) => {
            //         if (i.product.id == product.id) {
            //             i.quantity = i.quantity + 1;
            //         }
            //         return i;
            //     }),
            // );

            dispatch({ type:  itemActionTypes.UPDATE_QUANTITY_PRODUCT_CART, payload: product });
        } else {
            dispatch({type: itemActionTypes.ADD_PRODUCT_CART, payload: product});
            // setCartItems([
            //     ...cartItems,
            //     {
            //         product,
            //         quantity: 1,
            //     }
            // ]);
        }
    };
    const handlerDeleteProductCart = (id) => {
        dispatch({type: itemActionTypes.DELETE_PRODUCT_CART, payload: id})
        // setCartItems([
        //     ...cartItems.filter((i) => i.product.id !== id)
        // ]);
    };
    return (
        <>
            <div className="container my-4">
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