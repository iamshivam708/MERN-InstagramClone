import React from 'react'
import axios from 'axios'

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             number:"",
             sendNumber: (Math.random() + 1).toString(36).substring(6)
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let user = {
            user:this.state.email,
            number: this.state.sendNumber
        }
        axios.post('http://localhost:5000/user/forgot', user).then((res)=>{
            document.getElementById('number').style.display = 'block';
            document.getElementById('email').style.display = 'none';
        }).catch((err) =>{
            console.log(err)
        })
    }

    handleNumber = (e) =>{
        e.preventDefault();
        if(this.state.number === this.state.sendNumber){
            this.props.history.push("/newPassword" + this.state.email)
        }else{
            alert("number is wrong")
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
                            <h4>Enter your email</h4>
                            <p className="text-muted">Enter email to change your password</p>
                            <hr/>
                            <form id="email" onSubmit={this.handleSubmit}>
                                <div className="mb-2">
                                    <input onChange={e => this.setState({email: e.target.value})} type="text" className="form-control"  placeholder="Email" />
                                </div>
                                <div className="row px-5 mt-3">
                                    <button type="submit" className="btn btn-danger">Send</button>
                                </div>
                            </form>
                            <form style={{display:"none"}} id="number" onSubmit={this.handleNumber}>
                                <div className="mb-2">
                                    <input onChange={e => this.setState({number: e.target.value})} type="text" className="form-control"  placeholder="Enter number sent to your email" />
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

export default ForgotPassword
