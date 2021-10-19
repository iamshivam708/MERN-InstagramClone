import React, { Component } from 'react'
import Header from './Header'
import Story from './Story'
import SuggetedUsers from './User/SuggetedUsers'
//import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: sessionStorage.getItem('email')
        }
    }

    componentDidMount = () =>{
        if(sessionStorage.getItem("loggedIn") !== 'true'){
            this.props.history.push("/login")
        }else{
        }
    }

    render() {
        return (
            <div className="Main">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                        <Story/>
                        </div>
                        <div className="col-4">
                            <SuggetedUsers/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
