import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Header'
import {Link} from 'react-router-dom'

class SavedPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: sessionStorage.getItem('email'),
             posts:[]
        }
    }

    componentDidMount = () =>{
      let user = {
        email: this.state.email
      }
        axios.post("http://localhost:5000/saved/post", user).then((res) =>{
          this.setState({
            posts: res.data
          })
          console.log(res.data)
        }).catch((err) =>{
          console.log(err)
        })
    }
    
  render() {
    return (
      <div className="savedPost">
        <Header/>
        <div className="container">
          <h4 className="text-center">Saved Posts</h4>
        <div className="row" style={{padding:"0px 50px"}}>
            {this.state.posts.map((post) =>(
                <div key={post._id} id="post" className="col-4 mb-4">
                  <Link to={"/single/post/" + post.postId} style={{border:"none",background:"none"}}>
                    <img style={{borderRadius:"5%"}} id="picture" src={"/posts/"+post.image} height="100%" width="100%" alt="post" />
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SavedPost
