
const products = ['table', 'chair', 'notebook', 'keyboard'];
const products2 = products.concat(['new tv', 'sony tv'])

const fruits = ['pear', 'apple', 'watermerlon', 'fruits'];

const market = [...products2, ...fruits, 'potatoes', 'lettuce', 'grape'];
const market2 = products2.concat(fruits).concat('potatoes', 'lettuce', 'grape');

console.log(market2);