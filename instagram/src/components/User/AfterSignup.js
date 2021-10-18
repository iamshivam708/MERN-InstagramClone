import React from 'react'
import axios from 'axios'

class AfterSignup extends React.Component{

constructor(props) {
    super(props)

    this.state = {
         user:this.props.location.state[0],
         profile:'',
         image:'/avatar.jpg'
    }
}

componentDidMount = () =>{
    console.log(this.state.user)
}

handleProfile = (e) =>{
    const reader = new FileReader();
    reader.onload = () =>{
        if(reader.readyState === 2){
            this.setState({image: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
    this.setState({
        profile:e.target.files
    });
}

handleSubmit = (e) =>{
    e.preventDefault();
    var form = document.getElementById('form');
    var formData = new FormData(form);
    axios.post("http://localhost:5000/user/signup",formData).then((res) =>{
        if(res.data.error){
            alert("username or email is already used");
        }else{
            this.props.history.push('/login');
        }
    }).catch((err)=>{
        console.log(err)
    })
}

render(){
    const {user} = this.state
    return (
        <div className="AfterSignup">
            <div className="container mt-2">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-4">
                        <div className="row mt-3 px-5 py-4 mb-4" align="center" style={{width:"500px",background:"#fafafa", boxShadow:"10px 10px 10px #eeeeee"}}>
                            <div align="center">
                                <img src="/logo.png" height="80%" width="60%" alt="logo" />
                            </div>
                            <h4>Add your profile picture</h4>
                            <p className="text-muted">Add your profile picture to make your profile more impressive.</p>
                            <hr/>
                            <div className="row mt-3">
                                <div className="col-4"></div>
                                <div className="col-4" style={{height:"150px", width:"150px", background:"#eeeeee"}}>
                                   <img alt="profile" id="profile" src={this.state.image} width="100%" height="100%" /> 
                                </div>
                                <div className="col-4"></div>
                            </div>
                            <form id="form" encType="multipart/form-data" onSubmit={this.handleSubmit} className='mt-4'>
                            <input style={{display:"none"}} type="text" name="firstName" value={user.firstName} readOnly/>
                            <input style={{display:"none"}} type="text" name="surName" value={user.surName} readOnly/>
                            <input style={{display:"none"}} type="text" name="userName" value={user.userName} readOnly/>
                            <input style={{display:"none"}} type="text" name="email" value={user.email} readOnly/>
                            <input style={{display:"none"}} type="text" name="phone" value={user.phone} readOnly/>
                            <input style={{display:"none"}} type="text" name="hashedPassword" value={user.hashedPassword} readOnly/>
                            <input style={{display:"none"}} type="text" name="day" value={user.day} readOnly/>
                            <input style={{display:"none"}} type="text" name="month" value={user.month} readOnly/>
                            <input style={{display:"none"}} type="text" name="year" value={user.year} readOnly/>
                            <input style={{display:"none"}} type="text" name="gender" value={user.gender} readOnly/>
                                <div className="mb-2 mt-3">
                                    <input name="profile" onChange={this.handleProfile} type="file" className="form-control"/>
                                </div>
                                <div className="row mt-3" align="start">
                                    <button type="submit" className="btn btn-danger">Signup</button>
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

export default AfterSignup
