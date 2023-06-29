import { invoice } from "../data/invoice";

export const getInvoice = () => {
	//Procedimental Programming
	// let total = 0;
	// invoice.items.forEach((item) => {
	// 	total = total + item.price * item.quantity;
	// });

	//Functional Programming
	const total = calculateTotal(invoice.items);

	return { ...invoice, total };
};

export const calculateTotal = (items = []) => {
	return items
		.map((item) => item.price * item.quantity)
		.reduce((acc, currentValue) => acc + currentValue, 0);
};
