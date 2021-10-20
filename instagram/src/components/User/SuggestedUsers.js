import React, { Component } from 'react'
import axios from 'axios'

class SuggestedUsers extends Component {
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

    handleFollow(email){
        return event =>{
            event.preventDefault();
            let user = {
                userEmail: email,
                followerEmail:this.state.email
            }
            axios.post("http://localhost:5000/follow/add", user).then((res) =>{
                if(res.data.error){
                    alert(res.data.error)
                }else{
                    console.log(res.data);
                }
            }).catch((err) =>{
                console.log(err);
            })
        }
    }
    
    render() {
        return (
            <div className="suggestedUser">
                <div className="container-fluid" align="center">
                    <h5 style={{padding:"10px 0px",background:"#eeeeee"}}>Suggested users</h5>
                    {this.state.suggestedUsers.map((user) =>(
                    <div style={{background:"#fafafa"}} className="row mt-3 px-3" key={user._id} align="center">
                        <div className="col-4">
                            <img src={"/user/"+user.profile} height="100%" width="100%" alt="user profile" />
                        </div>
                        <div className="col-4 mt-3">
                            <p className="text-muted">{user.userName}</p>
                        </div>
                        <div className="col-4 mt-2">
                            <button onClick={this.handleFollow(user.email)} style={{border:"none",background:"none"}} className="nav-link">Follow</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default SuggestedUsers
