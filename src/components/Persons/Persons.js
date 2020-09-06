import React, {Component} from 'react';
import Person from './Person/Person'

 class Persons extends Component {

  //UPDATE = 1 //MOUNT = 2
  static getDerivedStateFromProps(props,state)
  {
    console.log("[Persons.js] getDerivedStateFromProps(props,state)", props, state);

    return state;
  }

  //UPDATE = 2
  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("[Persons.js] shouldComponentUpdate(nextProps, nextState)", nextProps, nextState);

    if(nextProps.persons !== this.props.persons)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  //UPDATE = 3 //MOUNT = 3
  render()  {

  return(

    this.props.persons.map((person, index) => {

        return <Person
        click = {() => this.props.clicked(index)}
        name = {person.name}
        age = {person.age}
        key = {person.id}
        changed = {(event) => this.props.changed(event, person.id)}/>

      })

)}


//UPDATE = 4
getSnapshotBeforeUpdate(prevProps, prevState)
{
  console.log("[Persons.js] getSnapshotBeforeUpdate(prevProps, prevState)", prevProps, prevState);

  return null;
  
}

//UPDATE = 5
componentDidUpdate()
{
  console.log("[Persons.js] componentDidUpdate()");
}

//MOUNT = 5
componentDidMount()
{
  console.log("[Persons.js] componentDidMount()");
}

componentWillUnmount()
{
  console.log("[Persons.js] cleanup work in componentWillUnmount()");
}

    }

export default Persons; 