import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js'
import Greeting from './Greeting.js'
import LoginControl from './LoginControl.js';
import List from './List.js'
import FormInput from './FormInput.js'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date()
    }
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.trick();
    },1000)
  }
  componentWillMount(){
    clearInterval(this.timer);
  }
  trick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return (
      <div>
        <Hello/>
        <Hello/>
        <Hello/>
        现在是 {this.state.date.toLocaleTimeString()}
        <LoginControl/>
        <FormInput/>
        <List/>
      </div>
    );
  }
}

export default App;
