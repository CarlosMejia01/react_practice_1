import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();
    const { name: nameClient, lastName, address } = client;
    const { country, city, street, number } = address;
    return (
        <>
            <div className="container">
                <div className="card my-3">

                    <div className="card-header">
                        Features
                    </div>
                    <div className="card-body">

                        <ul className="list-group">
                            <li className="list-group-item">Id: {id}</li>
                            <li className="list-group-item">Name: {name}</li>
                        </ul>

                        <div className="row my-3">
                            <div className="col">

                                <h3>Client Data</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{nameClient} {lastName}</li>
                                    <li className="list-group-item">{country} / {city}</li>
                                    <li className="list-group-item">{street} {number}</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Company data</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{company.name}</li>
                                    <li className="list-group-item">{company.fiscalNumber}</li>
                                </ul>
                            </div>
                        </div>
                        <h4>Invoice products</h4>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({ id, product, price, quantity }) => (<tr key={id}>
                                    <td>{product}</td>
                                    <td>{price}</td>
                                    <td>{quantity}</td>
                                </tr>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};