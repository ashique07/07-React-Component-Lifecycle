import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    //componentDidMount() equivalent but only when cockpit called first time
    useEffect ( () => {
      console.log("[Cockpit.js] useEffect()");

      setTimeout(() => {
        alert("saved data to the cloud");
      } ,1000);

      //componentWillUnmount() equivalent but only when cockpit called first time
      return () => {
        console.log("[Cockpit.js] cleanup work in useEffect()");
      }

    }, []
    );


  useEffect( () => {
    
    //THIS IS CALLED EVERYTIME COCKPIT IS CALLED
    console.log("[Cockpit.js] useEffect2()")
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect2()");
    }
  });

    let btnClass = '';

    if(props.showPersons)
    {
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    
    if(props.personsLength <= 2)
    {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1)
    {
      assignedClasses.push(classes.bold);
    }

    return (

        <div className = {classes.Cockpit}>

        <h1>{props.title}</h1>

        <p className = {assignedClasses.join(" ")}> This is a paragraph</p>

        <button className = {btnClass} onClick={props.clicked} >TOGGLE PERSON LIST !</button>

        </div>
    );
}

export default React.memo(cockpit);