const average = 5.9;
const statusResult = (average >= 5.5) ? 'Approved' : 'Rejected';

console.log(`Result: ${statusResult}`);

let max = 0;

const a = 5;
const b = 8;
const c = 12;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`The biggest number is: ${max}`);