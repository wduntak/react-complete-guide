import React from 'react';
import classes from './Person.css';

const Person = ( props ) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am a {props.age} years old!</p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );    
}

export default Person;