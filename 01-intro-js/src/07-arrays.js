const products = ['table', 'chair', 'notebook', 'keyboard'];

products.push('screen', 'tv');

products.forEach((el) => console.log(el)); //foreach

for(const prod of products) {
	console.log(prod)
}

for(let i=0; i < products.length; i++) {
	console.log(products[i]);
}