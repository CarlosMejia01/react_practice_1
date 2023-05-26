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

//Clone new object other instance of memory

const invoice2 = { ...invoice };

const result = invoice2 == invoice;

if(result) console.log(true)
else console.log(false);



