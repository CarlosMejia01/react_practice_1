export const CartView = () => {
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
    </>
  )
}
