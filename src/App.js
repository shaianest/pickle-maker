import logo from './logo.svg';
import './App.css';
import styled from './App.module.css';
import Person from "./components/Person";
import React , { Component } from 'react';
import Validation from "./components/validation";
import Char from "./components/Char"

class App extends Component {
  state = {
    persons : [ 
      {id:'fasde',name:"max",age:27},
      {id:'asde',name:"manu",age:17},
      {id:'cgfrfd',name:"alex",age:21}
    ],
    showPersons: false,
    userInput: ""
  }
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  nameChangeHandler = (id , event) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons})
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  inpChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }
  deleteCharHandler = (index) => {
    const input = [...this.state.userInput]
    input.splice(index,1)
    this.setState({userInput:input.join('')  })
  }
  render(){
    const hrStyle = {
      width: '99%'
    }
    const btnstyle = [];
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((persons , index) => {
            return <Person 
            name={persons.name} 
            age={persons.age}
            key={persons.id}
            Click={this.deletePersonHandler.bind(this, index)}
            Change={this.nameChangeHandler}
            id={persons.id}
            ></Person>
          })}
        </div>
      )
      btnstyle.push(styled.red)
    }
    const charList = this.state.userInput.split('').map((ch,i)=>{
      return <Char character={ch} CharHandler={this.deleteCharHandler.bind(this,i)}/>
    })
    return (
      <div className={styled.App}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            create react App
          </p>
          <button className={btnstyle} onClick={this.togglePersonsHandler}>show persons</button>
          {persons}
          <hr style={hrStyle} />
          <input type="text" onChange={this.inpChangeHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          <div>
          {charList}
          </div>
          
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn react
          </a>
        </header>
      </div>
    );
  }
}

export default App;
