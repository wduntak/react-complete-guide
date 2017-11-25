import React, { Component } from 'react';
import './App.css';
import {Person} from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Wangdu", age: 31 },
      { name: "Noryang", age: 30 }
    ],
    otherSate: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 31 },
        { name: "Noryang", age: 27 }  
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '2px solid blue',
      color: 'blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
              name={person.name}
              click={() => this.deletePersonHandler(index)} 
              age={person.age}/>
        })}     
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
