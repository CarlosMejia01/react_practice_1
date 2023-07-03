import { UsersForm } from "./components/UsersForm"
import { UsersList } from "./components/UsersList"
import { useUsers } from "./hooks/useUsers"

export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return (
        <>
            {!visibleForm || <div className="open-modal animation fadeIn">
                <div className="modal" style={{display: 'block'}} tabIndex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {userSelected.id > 0 ? 'Edit' : 'Create'} modal users
                                </h5>
                            </div>
                            <div className="modal-body">
                                <UsersForm
                                    handlerAddUser={handlerAddUser}
                                    initialUserForm={initialUserForm}
                                    userSelected={userSelected}
                                    handlerCloseForm={handlerCloseForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            New user
                        </button>}
                        {users.length === 0
                            ? <div className="alert alert-warning">No users in the system!</div>
                            : <UsersList
                                users={users}
                                handlerRemoveUser={handlerRemoveUser}
                                handlerUserSelectedForm={handlerUserSelectedForm}
                            />
                        }
                    </div>
                </div>
            </div >
        </>
    )
}
