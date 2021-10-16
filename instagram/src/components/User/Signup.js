import React, { useState} from 'react'
import {Link} from 'react-router-dom'

function Signup() {

    const[firstName, setFirstName] = useState('')
    const[surName, setSurName] = useState('')
    const[userName, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[password, setPassword] = useState('')
    const[day, setDay] = useState('')
    const[month, setMonth] = useState('')
    const[year, setYear] = useState('')
    const[gender, setGender] = useState('male')

    return (
        <div className="signup">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-4">
                        <div className="offset-4" align="center">
                            <img src="/logo.png" height="60%" width="60%" alt="logo" />
                        </div>
                        <div className="row mt-3 px-4 py-4 mb-5" align="center" style={{width:"500px",background:"#fafafa", boxShadow:"10px 10px 10px #eeeeee"}}>
                            <h4>Create a new account.</h4>
                            <p className="text-muted">It's quick and easy</p>
                            <hr/>
                            <form>
                                <div className="row mb-2">
                                    <div className="col-6">
                                        <input onChange={e => setFirstName(e.target.value)} type="text" className="form-control" id="firstName" placeholder="First name" />
                                    </div>
                                    <div className="col-6">
                                        <input onChange={e => setSurName(e.target.value)} type="text" className="form-control" id="lastName" placeholder="Surname" />
                                     </div>    
                                </div>
                                <div className="mb-2">
                                    <input onChange={e => setUserName(e.target.value)} type="text" className="form-control" id="username" placeholder="Username" />
                                </div>
                                <div className="mb-2">
                                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input onChange={e => setPhone(e.target.value)} type="text" className="form-control" id="mobile" placeholder="Mobile" />
                                </div>
                                <div className="mb-2">
                                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="row mb-2">
                                    <p style={{fontSize:"0.8em"}} className="text-muted" align="start">Date of birth</p>
                                    <div className="col-4">
                                        <input onChange={e => setDay(e.target.value)} type="text" className="form-control" id="day" placeholder="Day" />
                                    </div>
                                    <div className="col-4">
                                        <input onChange={e => setMonth(e.target.value)} type="text" className="form-control" id="month" placeholder="Month" />
                                     </div>
                                     <div className="col-4">
                                        <input onChange={e => setYear(e.target.value)} type="text" className="form-control" id="year" placeholder="Year" />
                                    </div>    
                                </div>
                                <div className="row mb-2">
                                    <p style={{fontSize:"0.8em"}} className="text-muted" align="start">Gender</p>
                                    <div className="col-6">
                                        <input onChange={e => setGender(e.target.value)} type="text" className="form-control" id="male" placeholder="Male" />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control" id="female" placeholder="Female" />
                                     </div>    
                                </div>
                                <div className="row">
                                    <p style={{fontSize:"0.8em"}} className="text-muted">*By clicking Sign Up, you agree to our Terms, 
                                        Data Policy and Cookie Policy. You may receive SMS notifications 
                                        from us and can opt out at any time.</p>
                                    <Link
                                     to={{pathname:"/aftersignup",
                                            state:[{firstName:firstName, surName:surName, userName:userName,email:email,
                                                    phone:phone,hashedPassword:password,day:day,month:month,year:year,gender:gender}]
                                        }} className="btn btn-danger">Go to Step 2</Link>
                                    <Link style={{textDecoration:"none"}} to='/login' className="mt-3">Already have an account ?</Link>
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

export default Signup
