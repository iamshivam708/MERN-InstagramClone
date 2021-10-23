import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SuggestedUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:sessionStorage.getItem("email"),
             suggestedUsers:[],
             follow:[],
             users:[],
        }
    }

    componentDidMount = () =>{
        let user={
            email:this.state.email
        }

        axios.post('http://localhost:5000/user/trying', user).then((res) =>{
             this.setState({
                follow: res.data.follow,
                users: res.data.user
            })
            const {users,follow} = this.state
            var c = users.filter(function(objFromA) {
                return !follow.find(function(objFromB) {
                  return objFromA.email === objFromB.userEmail
                })
              })
            this.setState({
                suggestedUsers: c
            })
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
                    window.location.reload();
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
                            <img style={{borderRadius:"50%"}} src={"/user/"+user.profile} height="100%" width="100%" alt="user profile" />
                        </div>
                        <div className="col-4 mt-3">
                            <Link style={{textDecoration:"none"}} to={"/user/" + user.email}><p className="text-muted">{user.userName}</p></Link>
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
