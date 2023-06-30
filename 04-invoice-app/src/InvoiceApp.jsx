import { useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect } from "react";
import { FormsItemsView } from "./components/FormsItemsView";

const invoiceInitial = {
    id: 0,
    name: "",
    client: {
        name: "",
        lastName: "",
        address: {
            country: "",
            city: "",
            street: "",
            number: 0,
        },
    },
    company: {
        name: "",
        fiscalNumber: 0,
    },
    items: [],
};
export const InvoiceApp = () => {

    const [total, setTotal] = useState(0);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const { id, name, client, company } = invoice;

    const [items, setItems] = useState([]);

    const [counter, setCounter] = useState(4);

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

    useEffect(() => {
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
    }, []);

    const handlerAddItems = ({product, price, quantity}) => {
        setItems([...items, { id: counter, product: product.trim(), price: parseInt(price.trim(), 10), quantity: parseInt(quantity.trim(), 10) }]);
        setCounter(counter + 1);
    }


    return (
        <>
            <div className="container">
                <div className="card my-3">

                    <div className="card-header">
                        Features
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Client data" client={client} />
                            </div>
                            <div className="col">
                                <CompanyView title="Company data" company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Invoice products" items={items} />
                        <TotalView total={total} />
                        <FormsItemsView handler={ handlerAddItems }/>
                    </div>
                </div>
            </div>
        </>
    )
};