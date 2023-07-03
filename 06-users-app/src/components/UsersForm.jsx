import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const UsersForm = ({ handlerAddUser, initialUserForm, userSelected, handlerCloseForm }) => {
    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || (!password && id === 0) || !email) {
            Swal.fire(
                'Validation error',
                'You must fill in the form',
                'error'
            );

            return;
        }
        //Save the user form in the user list
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    };

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    };
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="hidden"
                    name="id"
                    value={id}
                />
                <input
                    type="text"
                    className="form-control my-3 m-75"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                {id > 0 || <input
                    type="password"
                    className="form-control my-3 m-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />}
                <input
                    type="text"
                    className="form-control my-3 m-75"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
                <button
                    className="btn btn-primary"
                    type="submit">
                    {id > 0 ? 'Edit' : 'Add'}
                </button>
                <button
                    className="btn btn-primary mx-2"
                    type="button"
                    onClick={() => onCloseForm()}>
                    Close
                </button>
            </form>
        </>
    );
}