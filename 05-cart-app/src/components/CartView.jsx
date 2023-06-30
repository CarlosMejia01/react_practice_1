import { useEffect } from "react";
import { useState } from "react";
import { calculateTotal } from "../services/productServices";

export const CartView = ({ items, handlerDelete }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotal(items));
    sessionStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const onDeleteProduct = (id) => {
    handlerDelete(id);
  };
  return (
    <>
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
          {items.map(item => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.product.price}</td>
              <td><button
                className="btn btn-danger"
                onClick={() => onDeleteProduct(item.product.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-end fw-bold">Total</td>
            <td colSpan={2} className="text-start fw-bold">{total}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
