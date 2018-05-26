import React, { Component } from 'react';
import Greeting from './Greeting.js';

class LoginControl extends Component{
    constructor(props){
        super(props);
        this.signinClick = this.signinClick.bind(this);
        this.signupClick = this.signupClick.bind(this);
        this.state={
            isLogin:false
        }
    }
    signinClick(){
        this.setState({
            isLogin:true
        })
    }
    signupClick(){
        this.setState({
            isLogin:false
        })
    }

    render(){
        let button = null;
        if(this.state.isLogin){
            button = <Button onClick={this.signupClick}/>
        }
        else{
            button = <Button onClick={this.signinClick}/>
        }
        return (
            <div>
                <Greeting isLogin={this.state.isLogin} />
                {button}
            </div>
        
        )
    }

}

function Button(props){
    return (
        <button onClick={props.onClick}>2333</button>
    )
}

export default LoginControl