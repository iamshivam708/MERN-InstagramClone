import React, { Component } from 'react'
import axios from 'axios'

class SuggetedUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:sessionStorage.getItem("email"),
             suggestedUsers:[]
        }
    }

    componentDidMount = () =>{
        let user={
            email:this.state.email
        }
        axios.post('http://localhost:5000/user/getAllUsers',user).then((res) =>{
            this.setState({
                suggestedUsers:res.data
            })
        }).catch((err) =>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div className="suggestedUser">
                <div className="container-fluid" align="center">
                    <h5 style={{padding:"10px 0px",background:"#eeeeee"}}>Suggested users</h5>
                    {this.state.suggestedUsers.map((user) =>(
                    <div style={{background:"#fafafa"}} className="row mt-3 px-3 py-3" key={user._id} align="center">
                        <img src={"/user/"+user.profile} height="50px" width="20px" alt="user profile" />
                        <p className="text-muted">{user.firstName}&nbsp;{user.surName}</p>
                        <button className="btn btn-danger" ><i className="fas fa-heart"></i>&nbsp;&nbsp;Follow</button>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default SuggetedUsers
