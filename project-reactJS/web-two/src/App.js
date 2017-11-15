// Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Homepage from './components/pages/homepage';
import Contact from './components/pages/contact';
import Navigation from './components/pages/nav';

// CSS
import './Assets/css/default.min.css';




class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navigation/>

            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/contact" component={Contact}/>

          </div>
        </Router>
    );
  }
}

export default App;
