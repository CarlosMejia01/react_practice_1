import { findInvoiceById } from "./data/invoices";


findInvoiceById(2).then(console.log).catch(console.error);
