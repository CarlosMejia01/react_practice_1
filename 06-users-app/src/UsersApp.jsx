import { useReducer } from "react"
import { UsersForm } from "./components/UsersForm"
import { UsersList } from "./components/UsersList"
import { usersReducer } from "./reducers/usersReducer"

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@example.com'
    },
]
export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const handlerAddUser = (user) => {
        dispatch({
            type: 'addUser',
            payload: user
        })
    };

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UsersForm
                        handlerAddUser={handlerAddUser}
                    />
                </div>
                <div className="col">
                    <UsersList
                        users={users}
                    />
                </div>
            </div>
        </div>
    )
}
