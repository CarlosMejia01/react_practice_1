import { useEffect } from "react";
import { useState } from "react";

export const UsersForm = ({ handlerAddUser, initialUserForm, userSelected }) => {
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
            alert('You must complete the form fields!')
            return;
        }
        //Save the user form in the user list
        handlerAddUser(userForm);
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
                    type="submit"
                >
                    {id > 0 ? 'Edit' : 'Add'}
                </button>
            </form>
        </>
    );
}