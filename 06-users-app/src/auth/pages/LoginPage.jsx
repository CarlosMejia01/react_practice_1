export const LoginPage = () => {
    return (
        <div className="modal" style={{display: 'block'}} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form action="">
                        <div className="modal-body">
                            <input className="form-control my-3 w-75" placeholder="username" name="username" />
                            <input className="form-control my-3 w-75" placeholder="username" name="username" type="password" />
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