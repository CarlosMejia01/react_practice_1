import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { Navbar } from "./components/Navbar";
import { useItemsCart } from "./hooks/useItemsCart";

export const CartApp = () => {
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();
    return (
        <>
        <Navbar />
            <div className="container my-4">
                <h1>Cart App</h1>
                <Routes>
                    <Route
                        path="catalog"
                        element={<CatalogView handler={handlerAddProductCart} />}
                    />
                    <Route
                        path="cart"
                        element={(cartItems?.length <= 0 ?
                            <div className="alert alert-warning">There are no products in the shopping cart!</div>
                            :
                            (
                                <div className="my-4 w-50">
                                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                                </div>
                            ))}
                    />
                    <Route
                        path="/"
                        element={<Navigate to={'/catalog'} />}
                    />
                </Routes>
                { }
            </div>
        </>
    )
};