import React, { Component } from 'react'
import Header from '../Header'
import axios from 'axios'

class CreatePost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:sessionStorage.getItem("username"),
            email:sessionStorage.getItem("email"),
            profile:sessionStorage.getItem("profile")
        }
    }

    handleCreate = (e) =>{
        e.preventDefault();
        var form = document.getElementById('form')
        var formData = new FormData(form)
        axios.post("http://localhost:5000/post", formData).then((res) =>{
            this.props.history.push('/user')
        }).catch((err) =>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div className="createPost">
               <Header/> 
               <div className="container mt-4 px-5">
                   <h4 className="text-center">Create Post</h4>
                   <form id="form" encType="multipart/form-data" onSubmit={this.handleCreate}>
                       <input type="text" name="userName" defaultValue={this.state.name} style={{display:'none'}} />
                       <input type="text" name="userEmail" defaultValue={this.state.email} style={{display:'none'}} />
                       <input type="text" name="userProfile" defaultValue={this.state.profile} style={{display:'none'}} />
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input name="title" type="text" className="form-control" id="title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input name="description" type="text" className="form-control" id="description"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="file" className="form-label">Image</label>
                        <input name="image" type="file" className="form-control" id="file"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                   </form>
               </div>
            </div>
        )
    }
}

export default CreatePost
