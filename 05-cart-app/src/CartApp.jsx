import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";
import { useItemsCart } from "./hooks/useItemsCart";

export const CartApp = () => {
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h1>Cart App</h1>
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
};