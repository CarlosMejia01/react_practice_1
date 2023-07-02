import { UsersForm } from "./components/UsersForm"
import { UsersList } from "./components/UsersList"

export const UsersApp = () => {
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UsersForm />
                </div>
                <div className="col">
                    <UsersList />
                </div>
            </div>
        </div>
    )
}
