import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

export const CartApp = () => {


    return (
        <>
            <div className="container">
                <h1>Cart App</h1>
                <div className="my-4 w-50">
                    <CatalogView />
                    <CartView />
                </div>
            </div>
        </>
    )
};