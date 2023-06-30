import { useState } from "react";

export const FormsItemsView = ({ handler }) => {
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });
    const { product, price, quantity } = formItemsState;

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
        
        handler(formItemsState);
        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
    }

    return (
        <>
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                <input type="text" name="product" placeholder="Product" value={product} className="form-control m-3" onChange={onInputChange} />
                <input type="text" name="price" placeholder="Price" value={price} className="form-control m-3" onChange={onInputChange} />
                <input type="text" name="quantity" placeholder="Quantity" value={quantity} className="form-control m-3" onChange={onInputChange} />
                <button type="submit" className="btn btn-primary m-3">Nuevo item</button>
            </form>
        </>
    )
};