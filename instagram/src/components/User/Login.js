import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component {
    render(){
    return (
        <div className="signup">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-4" style={{marginTop:"2em"}}>
                        <div className="row mt-3 px-5 py-4 mb-4" align="center" style={{width:"500px",background:"#fafafa", boxShadow:"10px 10px 10px #eeeeee"}}>
                            <div align="center">
                                <img src="/logo.png" height="80%" width="60%" alt="logo" />
                            </div>
                            <h4>Login to your account</h4>
                            <p className="text-muted">Login to see photos and videos from your friends.</p>
                            <hr/>
                            <form>
                                <div className="mb-2">
                                    <input type="email" className="form-control" id="email" placeholder="Phone number, email or username" />
                                </div>
                                <div className="mb-2">
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="row px-5 mt-3">
                                    <button className="btn btn-danger">Signup</button>
                                    <a style={{textDecoration:"none"}} href="." className="mt-3">Forgot Password ?</a>
                                </div>
                            </form>
                        </div>
                        <div className="row px-4 py-4" align="center" style={{width:"500px",background:"#fafafa", boxShadow:"10px 10px 10px #eeeeee"}}>
                            <p>Don't have an account ? <Link to="/signup" style={{textDecoration:"none"}}>Signup</Link></p>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
    }
}

export default Login
