import React from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';

const person = ( props ) => {

    console.log("[Person.js] rendering....");
    
return (
    <Aux>

        <p onClick = {props.click}>My name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type = "text" onChange = {props.changed} value={props.name}/>

    </Aux>

);

};

person.propTypes = {

    click : PropTypes.func,
    changed : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number
} 

export default withClass(person, classes.Person);