import { UsersForm } from "./components/UsersForm"
import { UsersList } from "./components/UsersList"

export const UsersApp = () => {
    const initialUsers = [
        {
            id: 1,
            username: 'pepe',
            password: '12345',
            email: 'pepe@example.com'
        },
    ]
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UsersForm />
                </div>
                <div className="col">
                    <UsersList users={initialUsers}/>
                </div>
            </div>
        </div>
    )
}
