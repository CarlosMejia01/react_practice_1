import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvocieView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    const { total, id, name, client, company, items: itemsInitial } = getInvoice();
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [items, setItems] = useState(itemsInitial);

    const [counter, setCounter] = useState(4);

    const onProductChange = ({ target }) => {
        setProductValue(target.value);
    }
    const onPriceChange = ({ target }) => {
        setPriceValue(target.value);
    }
    const onQuantityChange = ({ target }) => {
        setQuantityValue(target.value);
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (productValue.trim().length <= 1) return;
        if (priceValue.trim().length <= 1) return;
        if (isNaN(priceValue.trim())) {
            alert('Error: price must be a number')
            return;
        }
        if (quantityValue.trim().length < 1) {
            alert('Error: quantity must be greater than 0')
            return;
        }
        if (isNaN(quantityValue.trim())) {
            alert('Error: quantity must be a number')
            return;
        }

        setItems([...items, { id: counter, product: productValue.trim(), price: parseInt(priceValue.trim(), 10), quantity: parseInt(quantityValue.trim(), 10) }]);
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
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
                        <InvocieView id={id} name={name} />

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
                        <form className="w-50" onSubmit={ onInvoiceItemsSubmit }>
                            <input type="text" name="product" placeholder="Product" value={productValue} className="form-control m-3" onChange={onProductChange} />
                            <input type="text" name="price" placeholder="Price" value={priceValue} className="form-control m-3" onChange={onPriceChange} />
                            <input type="text" name="quantity" placeholder="Quantity" value={quantityValue} className="form-control m-3" onChange={onQuantityChange} />
                            <button type="submit" className="btn btn-primary m-3">Nuevo item</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};