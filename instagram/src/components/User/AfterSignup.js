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

handleProfile = (e) =>{
    const reader = new FileReader();
    reader.onload = () =>{
        if(reader.readyState === 2){
            this.setState({image: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])

    this.setState({
        profile:e.target.files[0].name
    });
}

handleSubmit = (e) =>{
    e.preventDefault();
    if(this.state.profile === ''){
        alert("no photo selected");
    }
    // const user = {
    //     firstName:this.state.user.firstName,
    //     surName:this.state.user.surName,
    //     userName:this.state.user.userName,
    //     email:this.state.user.email,
    //     phone:this.state.user.phone,
    //     hashedPassword:this.state.user.hashedPassword,
    //     day:this.state.user.day,
    //     month:this.state.user.month,
    //     year:this.state.user.year,
    //     gender:this.state.user.gender,
    //     profile:this.state.profile
    // }
    // axios.post("http://localhost:5000/user/signup",user).then((res) =>{
    //     if(res.data.error.keyValue.email){
    //         alert("email already exists")
    //     }
    //     else if(res.data.error.keyValue.userName){
    //         alert("Username already exists")
    //     }else{
    //         console.log(res.data)
    //     }

    //     if(res.data){
    //         console.log(res.data)
    //     }
    // }).catch((err)=>{
    //     console.log(err)
    // })

}

render(){
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
                            <form encType="multipart/form-data" onSubmit={this.handleSubmit} className='mt-4'>
                                <div className="mb-2 mt-3">
                                    <input name="image-upload" id="input" accept="image/*" onChange={this.handleProfile} type="file" className="form-control"/>
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
