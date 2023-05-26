
const papper = {
	product: "paper",
	price: 100,
	quantity: 10,
};
const invoices = [
	{
		id: 1,
		name: "Office shopping",
		client: {
			name: "Maria",
			lastName: "Doe",
		},
		items: [
			{
				product: "keyboard",
				price: 399,
				quantity: 2,
			},
			{
				product: "mouse",
				price: 200,
				quantity: 1,
			},
			papper
		],
	},
	{
		id: 2,
		name: "Compute shopping",
		client: {
			name: "Pepe",
			lastName: "Doe",
		},
		items: [
			{
				product: "keyboard",
				price: 399,
				quantity: 2,
			},
			{
				product: "screen 17",
				price: 500,
				quantity: 1,
			},
			{
				product: "cpu",
				price: 1000,
				quantity: 10,
			},
		],
	},
	{
		id: 3,
		name: "Stationery shopping",
		client: {
			name: "Jhon",
			lastName: "Doe",
		},
		items: [
			{
				product: "pencil",
				price: 50,
				quantity: 1,
			},
			papper
		],
	},
];

//Export default
//Only one export default
const invoiceByClientName = (clientName) => invoices.filter((i) => i.client.name === clientName);

const invoiceById = (id) => invoices.find((i) => i.id === id);

const findInvoiceById = (id) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = invoiceById(id);
			if (result) {
				resolve(result);
			} else {
				reject("error: the invoice does not exists");
			}
			// console.log(result);
		}, 2500);
	});
    return promise;
};

export {
    papper,
    invoices as default,
	invoiceByClientName,
	invoiceById,
	findInvoiceById
}