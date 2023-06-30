import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "./services/productServices";

export const CartApp = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, [])

    return (
        <>
            <div className="container">
                <h1>Cart App</h1>
                <div className="row">
                    {products.map(prod => (
                        <div className="col-4 my-2" key={prod.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{prod.name}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <p className="card-text">{prod.price}</p>
                                    <button className="btn btn-primary">Add item</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="my-4 w-50">
                    <h3>Shopping Cart</h3>
                    <table className="table table-hover table-stiped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Total</td>
                                <td>Delete</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} className="text-end fw-bold">Total</td>
                                <td colSpan={2} className="text-start fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
};