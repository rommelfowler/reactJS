import React, {Component} from 'react';
import Clock from './Clock';

import './App.css';

// console.log('%cYou\'re checking the App Component called App.jsx: ', 'background:#ea8181; color:whitesmoke; font-size:12px; padding:5px;');

class App extends Component {
  // Always add constructor and super function with props as a parameter
  constructor(props){
    super(props);

    this.state = {
      deadline: "December 25, 2017",
      newDeadline: ""
    }
  }

  changeDeadline(){
    // never mutate state directly
    this.setState({
      deadline: this.state.newDeadline
    });
  }
  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
          <Clock
            deadline ={this.state.deadline}
            />
        <div>
          <input
            placeholder="new date"
            onChange={event => this.setState({
              newDeadline: event.target.value
            })}
            />
          {/*()=> this signifies annonymous function*/}
          <button onClick={() => this.changeDeadline() }>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
