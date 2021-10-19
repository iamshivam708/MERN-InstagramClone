import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             query:"",
             password:""
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let user = {
            query: this.state.query,
            password: this.state.password
        }
        axios.post('http://localhost:5000/user/login',user).then((res) =>{
            sessionStorage.setItem("email", res.data.user.email);
            sessionStorage.setItem("username", res.data.user.userName);
            sessionStorage.setItem("loggedIn", "true");
            this.props.history.push("/");
        }).catch((err) =>{
            console.log(err);
        })
    }


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
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-2">
                                    <input onChange={e => this.setState({query: e.target.value})} type="text" className="form-control"  placeholder="Email or username" />
                                </div>
                                <div className="mb-2">
                                    <input onChange={e => this.setState({password: e.target.value})} type="password" className="form-control"  placeholder="Password" />
                                </div>
                                <div className="row px-5 mt-3">
                                    <button type="submit" className="btn btn-danger">Login</button>
                                    <Link to="/forgot" style={{textDecoration:"none"}}  className="mt-3">Forgot Password ?</Link>
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
