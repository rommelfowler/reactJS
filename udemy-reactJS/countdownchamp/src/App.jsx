import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock';
import "./App.css"
// ES6 allows us to extend components from react
class App extends Component {
  // @package state - each component has its own local state
  // @package props - inherited data from OOP
  constructor(props){
    super(props)
    // @package state - is always an object. An object property keys map values.
    // Values like string, a number or another object.
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  // you must declare a method that updates the state
  changeDeadline(){
    // @package this.setState() - updates the state dynamically
    // @RULE - never mutate / change state directly. To stop this, pass setState
    // with a new object{} key-value pair
    this.setState({
      deadline: this.state.newDeadline,
    })

    console.log('%cchangeDeadline Method', 'background:#333;color:#fff;padding:2px', this.state);
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">Count Down to {this.state.deadline}</div>
          <Clock
            deadline={this.state.deadline}
          />
        <Form inline>
          {/* @package onChange function changes the newDeadline - in constructor() -
            to the target value of what is typed*/}
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={event => this.setState({newDeadline: event.target.value})}

          />
          {/* onClick uses ()=> annonymous function to call changeDealine function*/}

          <Button onClick={()=> this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
