import logo from './logo.svg';
import './App.css';
import Person from "./components/Person";
import React , { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    persons : [ 
      {name:"max",age:27},
      {name:"manu",age:17},
      {name:"alex",age:21}
    ],
    username: 'ali'
  }
  btn1 = () => {
    // console.log("clicked")
    this.setState({persons : [ 
      {name:"ali",age:27},
      {name:"manu",age:17},
      {name:"alex",age:20}
    ]})
  }
  btnUsername = event => {
    this.setState({
      username: event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            create react App
          </p>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
          <button onClick={this.btn1}>click me</button>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn react
          </a> */}
          <UserInput 
          Changed={this.btnUsername}
          userNameinit={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>


        </header>
      </div>
    );
  }
}

export default App;
