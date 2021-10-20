import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Header'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: sessionStorage.getItem('email'),
             user:[],
             following:0,
             followers:0
        }
    }

    componentDidMount = () =>{
      if(sessionStorage.getItem("loggedIn") !== 'true'){
        this.props.history.push("/login")
    }else{
        axios.get(`http://localhost:5000/user/${this.state.email}`).then((res) =>{
          this.setState({
            user:res.data[0]
          })
        }).catch((err) =>{
          console.log(err);
        })

        const user={
          email: this.state.email
        }
        axios.post('http://localhost:5000/follow',user).then((res) =>{
          if(res.data === ''){
            
          }else{
          this.setState({
            following:res.data.count
          })
        }
        }).catch((err) =>{
          console.log(err);
        })

        axios.post('http://localhost:5000/follow/followers',user).then((res) =>{
          if(res.data === ''){
            
          }else{
            this.setState({
              followers:res.data.count
            })
          }
        }).catch((err) =>{
          console.log(err);
        })
      }
    }
    
  render() {
    const {user} = this.state
    return (
      <div className="user">
        <Header/>
        <div className="container">
          <div className="row justify-content-center text-center" >
            <div className="col-6" style={{height:"150px",width:"200px"}}>
              <img style={{borderRadius:"50%"}} src={"/user/"+user.profile} height="100%" width="100%" alt="user" />
            </div>
            <div className="col-6 mt-3" align="start">
              <h4>{user.userName}</h4>
              <div className="row mt-3">
                <div className="col-3">
                  <p>0 posts</p>
                </div>
                <div className="col-3">
                <button style={{border:"none",background:"none"}} data-bs-toggle="modal" data-bs-target="#staticBackdropIn">{this.state.followers} followers</button>
                </div>
                <div className="col-3">
                  <button style={{border:"none",background:"none"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">{this.state.following} following</button>
                </div>
              </div>
            </div>
          </div>
          <hr style={{maxWidth:"80%",marginLeft:"100px",marginTop:"40px"}} />
          
          <div className="row mt-4" align="center">
          <p className="text-muted"><i className="fas fa-th"></i> Posts</p>

          {/* followings */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Following</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
              </div>
            </div>
          </div>

          {/* followers */}
          <div className="modal fade" id="staticBackdropIn" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Followers</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    )
  }
}

export default User
