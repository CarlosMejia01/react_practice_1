const sayHello = (name = 'Pepe', age = 0) =>  `Hellow world! Function ${name} edad ${age}`;
const add = (a = 0, b = 0) =>  a + b;

const result = sayHello('Andres', 10);
console.log(result);
console.log(add(50,5));