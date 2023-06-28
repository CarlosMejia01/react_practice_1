import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvocieView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    const { total, id, name, client, company, items } = getInvoice();
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
                        <TotalView total={total} />
                    </div>
                </div>
            </div>
        </>
    )
};