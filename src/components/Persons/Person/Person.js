import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor()', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');    
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');        
      }
    render () {
        console.log('[Person.js] Inside render()');                
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am a {this.props.age} years old!</p>
                {this.props.children}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;