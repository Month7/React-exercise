import React, { Component } from 'react';

class FormInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            hehe:'hahaha',
            haha:'hehehe'
        }
        this.changeText = this.changeText.bind(this);
        this.submitText = this.submitText.bind(this);
    }
    changeText(e){
        const name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
        console.log(name);
    }
    submitText(e){
        e.preventDefault();
        alert(this.state.hehe);
        alert(this.state.haha);
    }
    render(){
        return (
            <form onSubmit={this.submitText}>
                <input type="text" name="hehe" value={this.state.hehe} onChange={this.changeText}/>
                <input type="submit" value="提交"/>
                <input type="text" name="haha" value={this.state.haha} onChange={this.changeText}/>
            </form>
        )
    }
}

export default FormInput