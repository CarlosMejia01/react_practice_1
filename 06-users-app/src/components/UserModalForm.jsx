import { UsersForm } from "./UsersForm";

export const UserModalForm = ({ userSelected, initialUserForm, handlerAddUser, handlerCloseForm }) => {
    return (
        <div className="open-modal animation fadeIn">
            <div className="modal" style={{ display: 'block' }} tabIndex="-1">
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
        </div>
    )
};