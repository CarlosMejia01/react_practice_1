import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();
    const { name: nameClient, lastName, address } = client;
    const { country, city, street, number } = address;
    return (
        <>
            <h1>Example Invoice</h1>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
            </ul>
            <h3>Datos del cliente</h3>
            <ul>
                <li>{nameClient} {lastName}</li>
                <li>{country}</li>
                <li>{city}</li>
                <li>{street} {number}</li>
            </ul>
            <h3>Company data</h3>
            <ul>
                <li>{company.name}</li>
                <li>{company.fiscalNumber}</li>
            </ul>
            <h4>Invoice products</h4>
            <table>
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
        </>
    )
};