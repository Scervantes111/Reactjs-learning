import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
     persons: [
       { id: '34',name: 'Max', age: 28 },
       { id: '123',name: 'Sal', age: 29 },
       { id: '578',name: 'Jessica', age: 25 }
     ],
     otherState: 'some other value',
     showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]    
     };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState ( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    
    if (this.state.showPersons) 
        persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
            ;


    return (
        <div className={classes.App}>
          <Cockpit 
           appTitle={this.props.title} 
           showPersons={this.state.showPersons} 
           persons = {this.state.persons} 
           clicked={this.togglePersonsHandler} />

          {persons}
      </div>
    );
  }
}

export default App;