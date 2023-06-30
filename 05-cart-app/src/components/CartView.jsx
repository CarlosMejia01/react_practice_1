export const CartView = ({ items, handlerDelete }) => {
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
            <td colSpan={2} className="text-start fw-bold">12345</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
