import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
    const invoice = getInvoice();
    return (
        <>
        <h1>Example Invoice</h1>
        <ul>
            <li>Id: {invoice.id}</li>
            <li>Name: {invoice.name}</li>
        </ul>
        </>
    )
};