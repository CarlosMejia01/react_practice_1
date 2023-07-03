import { useState } from "react";

const initialUserForm = {
    username: '',
    password: '',
    email: ''
};
export const UsersForm = () => {
    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email } = userForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value
        });
    };
    return (
        <>
            <form action="">
                <input
                    className="form-control my-3 m-75"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input
                    className="form-control my-3 m-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />
                <input
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
                    Create user
                </button>
            </form>
        </>
    );
}