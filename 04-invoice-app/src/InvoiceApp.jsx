import { useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect } from "react";

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

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });


    const { product, price, quantity } = formItemsState;

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

    useEffect(() => {
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
    }, []);



    const onInputChange = ({ target: { name, value } }) => {
        setFormItemsState({
            ...formItemsState,
            [name]: value
        })
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            alert('Error: price must be a number')
            return;
        }
        if (quantity.trim().length < 1) {
            alert('Error: quantity must be greater than 0')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error: quantity must be a number')
            return;
        }

        setItems([...items, { id: counter, product: product.trim(), price: parseInt(price.trim(), 10), quantity: parseInt(quantity.trim(), 10) }]);
        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
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
                        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                            <input type="text" name="product" placeholder="Product" value={product} className="form-control m-3" onChange={onInputChange} />
                            <input type="text" name="price" placeholder="Price" value={price} className="form-control m-3" onChange={onInputChange} />
                            <input type="text" name="quantity" placeholder="Quantity" value={quantity} className="form-control m-3" onChange={onInputChange} />
                            <button type="submit" className="btn btn-primary m-3">Nuevo item</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};