import React from 'react'
import axios from 'axios'

class NewPassword extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             password:"",
             confirmPassword:"",
             email:this.props.match.params.email
        }
    }

    componentDidMount = () =>{
        console.log(this.state.email);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            alert("password and confirm password are not same")
        }else{
            const user = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post("http://localhost:5000/user/update", user).then((res) =>{
                this.props.history.push("/login");
            }).catch((err) =>{
                console.log(err);
            })
        }
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
                            <h4>Enter New Password</h4>
                            <p className="text-muted">Enter new password to login to your account</p>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-2">
                                    <input onChange={e => this.setState({password: e.target.value})} type="text" className="form-control"  placeholder="Password" />
                                </div>
                                <div className="mb-2">
                                    <input onChange={e => this.setState({confirmPassword: e.target.value})} type="text" className="form-control"  placeholder="Confirm Password" />
                                </div>
                                <div className="row px-5 mt-3">
                                    <button type="submit" className="btn btn-danger">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    )
    }
}

export default NewPassword
