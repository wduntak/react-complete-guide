import React from 'react';
import './Person.css';

const Person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am a {props.age} years old!</p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );    
}

export default Person;