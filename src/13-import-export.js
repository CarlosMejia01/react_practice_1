import invoiceClientName, { invoices, papper  } from "./data/invoices";

console.log('clientName',invoiceClientName('Pepe'));
//Array Map
const invoicesClone = invoices.map((i) => i.name);

console.log(invoicesClone);

const invoicesClient = invoices.map((i) => i.client.name);

console.log(invoicesClient);

//Array Find
const invoiceById = invoices.find((i) => i.id === 3);

console.log(invoiceById);

//Filter
const invoiceFilter = invoices.filter((i) => i.id > 1);

console.log(invoiceFilter);

const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));

console.log(invoiceFilter2);

//Some

const result = invoices.some((i) => i.client.name === "Pepe");

console.log(result);

