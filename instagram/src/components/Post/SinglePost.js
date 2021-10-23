import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class SinglePost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:this.props.match.params.id,
             post:[]
        }
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:5000/post/user/${this.state.id}`).then((res) =>{
            this.setState({
                post: res.data
            })
            console.log(res.data)
        }).catch((err) =>{
            console.log(err);
        })
    }
    
  render() {
      const {post} = this.state
    return (
      <div className="singlePost">
        <div className="container">
            <div className="row" align="center">
            <div className="modal" id="staticBackdrop" style={{display:"block",marginLeft:"0px"}}>
            <div className="modal-dialog" style={{marginLeft:"250px"}}>
              <div className="modal-content" style={{width:"800px"}}>
                <div className="modal-body">
                      <div className="row mt-3 px-1 py-2">
                        <div className="col-7" style={{height:"500px"}}>
                            <img src={"/posts/" + post.image} height="100%" width="100%" alt="post" />
                        </div>
                        <div className="col-5">
                            <div className="row" align="start">
                              <div className="col-8">
                                <p><span style={{fontSize:"24px"}}>{post.title}</span><br/> <span style={{fontSize:"14px"}} className="text-muted mt-2">{post.description}</span></p>
                              </div>
                              <div className="col-4">
                              <Link to="/user" style={{color:"#9e9e9e"}}><i className="fas fa-arrow-left fa-2x"></i></Link>
                              </div>
                            </div>
                        </div>
                      </div>
                
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

export default SinglePost
