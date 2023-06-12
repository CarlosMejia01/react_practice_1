export const invoice = {
	id: 10,
	name: "PC Components",
	client: {
		name: "Pepe",
		lastName: "Doe",
		address: {
			country: "USA",
			city: "Los Angeles",
			street: "One Street",
			number: 12,
		},
	},
	company: {
		name: "New Egg",
		fiscalNumber: 1234567,
	},
	items: [
		{
			product: "Cpu Intel i7",
			price: 499,
			quantity: 1,
		},
		{
			product: "Corsair Mechanical Keyboard",
			price: 150,
			quantity: 1,
		},
		{
			product: "Monitor Asus",
			price: 350,
			quantity: 1,
		},
	],
};