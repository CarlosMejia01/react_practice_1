const invoice = {
	id: 10,
	name: "Office shopping",
	date: new Date(),
	client: {
		id: 2,
		name: "Jhon",
		lastName: "Doe",
		age: 20,
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
		{
			product: "paper",
			price: 100,
			quantity: 10,
		},
	],
	total: function() {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
	greeting: () => {
		return `Hi ${invoice.client.name}`;
	},
};

invoice.client.name = 'Pepe roe'; //change property value
// invoice.total = 5000;

console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);
console.log(`Total: ${invoice.total()}`);