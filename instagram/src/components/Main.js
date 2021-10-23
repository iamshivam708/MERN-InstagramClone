import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'
import SuggestedUsers from './User/SuggestedUsers'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: sessionStorage.getItem('email'),
            posts:[]
        }
    }

    componentDidMount = () =>{
        if(sessionStorage.getItem("loggedIn") !== 'true'){
            this.props.history.push("/login")
        }else{
            const user = {
                email: this.state.email
            }
            var postTry = []
            axios.post("http://localhost:5000/post/followed",user).then((res) =>{
                res.data.map((posts) =>{
                    posts.map((post) =>{
                        return postTry.push(post);
                    })
                    return posts
                })

                this.setState({
                    posts: postTry
                })
            }).catch((err) =>{
                console.log(err);
            })
        }
    }

    render() {
        return (
            <div className="Main">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                        {/* <Story/> */}
                        <h5 className="text-center" style={{padding:"10px 0px",background:"#eeeeee"}}>All posts of your friends</h5>


                        {this.state.posts.map((post) =>(
                        <div className="container" key={post._id}>
                        <div className="card text-center mt-5 mb-4" style={{maxWidth:"80%"}}>
                            <div className="card-header text-start">
                                <div className="row">
                                    <div className="col-2 mt-2">
                                        <img style={{borderRadius:"50%"}} alt="user" src={"/user/" + post.userProfile} height="50px" width="50px" />
                                    </div>
                                    <div className="col-10 text-start">
                                        <p><span style={{fontSize:"24px"}}>{post.userName}</span><br/> <span style={{fontSize:"14px"}} className="text-muted mt-2">{post.title}</span></p>
                                    </div>
                                </div>
                            </div>
                            <img src={"/posts/"+post.image} alt="post" height="100%" width="100%" className="card-img-top"/>
                            <div className="card-body" align="start">
                                <p className="card-text"><img style={{borderRadius:"50%"}} alt="user" src={"/user/" + post.userProfile} height="50px" width="50px" />&nbsp;&nbsp;{post.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>
                        </div>
                        ))}


                        </div>
                        <div className="col-4">
                            <SuggestedUsers/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
