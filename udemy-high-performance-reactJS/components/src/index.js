import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';

// Component
import App from "./components/app";
import {default as Portfolio} from './components/portfolio';
import About from "./components/about";
import Header from "./components/header";
import Contact from "./components/contact";
//DESTRUCTOR get variables from&to from obj
// let obj = {from:"Ben", to:"You"};
// let {from, to} = obj;


// Creating views - you can add a link using a (,) - this an array with objects of data
let portfolioModel = [
  {img:"img1", link:'http://www.rommelfowler.com', title:"img1", imgTitle:"my website"},
  {img:"img2", link:'http://www.rommelfowler.com', title:"img2", imgTitle:"my website"}
];
// This is a footer module
let  footerModel = [
  {title:"Location" , content:"3034 Melrose Place Beverly Hills, CA 90201"},
  {title:"Around the Web" , content:[
    {link: "http://www.rommelfowler.com", name:"facebook"},
    {link: "http://www.rommelfowler.com", name:"twitter"},
    {link: "http://www.rommelfowler.com", name:"github"}
  ]},
  {title:"About Start Bootstrap" , content:"Start Bootstrap is an open source library of Bootstrap themes and templates."}
]
let headerModel = {
  title:"Master React Components",
  skills:"React Component - JSX - ES6"
}
// NOTE: var has global scope whereas let and const scope is dependent on the nearest {}
// console.log(version)
//Check var in portfolio.js

//NOTE: argument logic set.
// function addNumbers(...args){ the (...) returns a type of array
//   return arguments; ES5 method
//   let total = 0;
//   for (let arg of args){
//     total+=arg;
//     console.log(arg);
//   }
//   return total;
// }
// console.log(addNumbers(10,10));
//
// function dupRestByTotalOfRest(a, ...args){
//   console.log(addNumbers.apply(this,args));
//   return a * addNumbers.apply(this,args);
// }
// console.log(dupRestByTotalOfRest(10,10));
let modelDataSource = {
  portfolio : portfolioModel,
  footer : footerModel,
}
let mv={
  header:{ model:headerModel, view:Header,label:"React Components" },
  portfolio: {model:portfolioModel, view: Portfolio,label:"Portfolio"},
  about:{view:About, label:"About"},
  contact:{view:Contact,label:"Contact"},
  footer:{model:footerModel}
}

ReactDOM.render(
  <App data={mv} />,document.getElementById('root'));
