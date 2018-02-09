import React, { Component } from 'react';
// import {Route,NavLink, HashRouter} from "react-router-dom";
// Component

import Footer from "./footer";
import Nav from "./nav";

export default class App extends Component {
  constructor(props){
    super(props);
    // this.state = {section: location.hash}

    this.map = new Map(); // enables you to connect different objects/ strings, etc. with key&value
    this.map.set('footer',Footer); //this maps footer and links it to Footer class.

    this.onLinkClick = this.onLinkClick.bind(this); //binds this event to onLinkClick()

    // window.onhashchange = (e) => {
    //   if(this.mpa.has(location.hash)){
    //     this.setState({section:location.hash});
    //   }
    // }
  }
  onLinkClick(e) {
    // e.preventDefault();
    // console.log("hello");
  }


  render(){
    let children = [], navModel = [];

    for(let key in this.props.data){
      let View = this.props.data[key].view,
      {label,model} = this.props.data[key];

      if(!View && this.map.has(key)){
        View = this.map.get(key);
      }
      if(View){
        let test = children.push(<View key={key} data={this.props.data[key].model}/>);
        console.log(test);
        if (label) {
          navModel.push({link:"#"+key, name:label});
          console.log(navModel);
        }
      }
    }
    return(
      <div>
      <Nav onClick={this.onLinkClick} data={navModel}/>
      {children}
      </div>
    );
  }
}


// <div>
//
//   <Header />
//   <About/>
//   <Portfolio data={this.props.data.portfolio} />
//   <Contact/>
//   <Footer data={this.props.data.footer}/>
//   {/*use data to grab data from an array or object*/}
// </div>
