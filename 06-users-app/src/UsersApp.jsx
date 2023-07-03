import { useReducer } from "react"
import { LoginPage } from "./auth/pages/LoginPage"
import { loginReducer } from "./auth/pages/reducers/LoginReducer"
import { UsersPage } from "./pages/UsersPage"
import Swal from "sweetalert2"

const initialLogin = {
    isAuth: false,
    user: undefined,
}
export const UsersApp = () => {
    const [login, dispatch] = useReducer(loginReducer, initialLogin)

    const handlerLogin = ({ username, password }) => {
        if (username === 'admin' && password === '12345') {
            const user = { username: 'admin' };
            dispatch({
                type: 'login',
                payload: user,
            });
        } else {
            Swal.fire(
                'Login error',
                'Invalid username and password',
                'error'
            );
        }
    };
    return (
        <>
            {login.isAuth

                ? <UsersPage />
                : <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    )
}
