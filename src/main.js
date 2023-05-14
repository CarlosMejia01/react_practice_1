function sayHello(name = 'Pepe', age = 0) {
    const greeting = `Hellow world! Function ${name} edad ${age}`;
    // console.log('Hellow world! Function')
    return greeting;
}

const result = sayHello('Andres', 10);
console.log(result);