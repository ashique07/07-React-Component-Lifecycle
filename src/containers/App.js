import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {

  //MOUNT = 1
  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor()');
  }

  //MOUNT = 2 //UPDATE = 1
  static getDerivedStateFromProps(props, state)
  {
    console.log('[App.js] getDerivedStateFromProps()', props, state);

    return state;
  }

  //UPDATE = 2
  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[App.js] shouldComponentUpdate(nextProps, nextState)', nextProps, nextState);
    return true;
  }



  state = {
    persons : [
      {id : "a1", name : "Max", age : "27"},
      {id : "a2", name : "Manu", age : 26},
      {id : "a3", name : "Steph", age : 26}
    ],

    anotherState : "anotherValue",

    showPersons : false,

    showCockpit : true,

    changeCounter : 0

  }

  
  switchNameHandler = (newName) => {

    this.setState ( {
      persons : [
        {id : "a1", name : newName, age : 27},
        {id : "a2", name : "Manu", age : 26},
        {id : "a3", name : "Steph", age : 101}
      ]
    }
    );
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const personArray = [...this.state.persons];

    personArray[personIndex] = person;

    this.setState((prevState, props) => {

    return {  
    persons : personArray,
    changeCounter : prevState.changeCounter + 1
    };

  });
  
  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;

    this.setState( {showPersons : !doesShow} );
  }

  deletePersonsHandler = (personIndex) => {

    //const personArray = this.state.persons;
    //this will change original array
    //const personArray = this.state.persons.slice();
    const personArray = [...this.state.persons];

    personArray.splice(personIndex, 1);

    this.setState( {persons : personArray} );
  }

  //MOUNT = 3 //UPDATE = 3
  render() {

    let persons = null;

    if (this.state.showPersons)
    {
      persons = (
        <div>
          
          <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonsHandler}
          changed = {this.nameChangedHandler}
          />
          
        </div>

        );
       
      }

    return (
      
      <Aux>

      <button onClick = {() => {this.setState({showCockpit : false})}}>
        REMOVE COCKPIT
      </button>

        {
        this.state.showCockpit ?

        <Cockpit
        title = {this.props.appTitle}
        showPersons = {this.state.showPersons}
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonsHandler} /> 
        
        : null
        }

        {persons}

      </Aux>
      
    );
  }

  //5
  componentDidMount(){
    console.log('[App.js] componentDidMount()');
  }

  //UPDATE = 5 (after getSnapshot)
  componentDidUpdate()
  {
    console.log('[App.js] componentDidUpdate()');
  }
}

export default withClass(App, classes.App);