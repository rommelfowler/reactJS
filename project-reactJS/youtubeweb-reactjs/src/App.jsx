import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  link
} from 'react-router-dom';
// Component
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './components/pages/homepage';

// STYLES
import './Assets/css/default.min.css';

// App is the container of the web
class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <Homepage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
