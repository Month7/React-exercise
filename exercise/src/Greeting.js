import React,{Component} from 'react';

class Greeting extends Component{
    render(){
        if(this.props.isLogin){
            return (
                <div>欢迎您,Month7</div>
            )
        }
        else{
            return (
                <div>请登录</div>
            )
        }
    }
}

export default Greeting