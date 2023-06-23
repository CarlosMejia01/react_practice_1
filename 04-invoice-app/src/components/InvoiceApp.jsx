import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvocieView } from "./InvoiceView";
import { ListItemsView } from "./ListItemsView";

export const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();
    return (
        <>
            <div className="container">
                <div className="card my-3">

                    <div className="card-header">
                        Features
                    </div>
                    <div className="card-body">
                        <InvocieView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Client data" client={client} />
                            </div>
                            <div className="col">
                                <CompanyView title="Company data" company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Invoice products" items={items} />
                    </div>
                </div>
            </div>
        </>
    )
};