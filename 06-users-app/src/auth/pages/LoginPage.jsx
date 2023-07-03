import { useState } from "react";
import Swal from "sweetalert2";

const inititalLoginForm = {
    username: '',
    password: ''
}
export const LoginPage = () => {
    const [loginForm, setLoginForm] = useState(inititalLoginForm);
    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire(
                'Validation error',
                'Username and password are required',
                'error'
            );
        }

        //Login is implemented here
        if (username === 'admin' && password === '12345') {
            //handlerLogin();
        } else {
            Swal.fire(
                'Login error',
                'Invalid username and password',
                'error'
            );
        }
        setLoginForm(inititalLoginForm);
    };

    return (
        <div className="modal" style={{ display: 'block' }} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="username"
                                name="username"
                                value={username}
                                onChange={onInputChange} />
                            <input
                                className="form-control my-3 w-75"
                                placeholder="username"
                                name="username"
                                type="password"
                                value={password}
                                onChange={onInputChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};