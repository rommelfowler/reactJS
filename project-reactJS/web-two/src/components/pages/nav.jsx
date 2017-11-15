import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';


class Navigation extends Component {


  render(){
    return(
     <header>
       <div className=" logo">
         <Link to="/" >Logo</Link>
       </div>

       <nav className=" nav">
         <ul>
           <li>
             <Link to="/homepage">Homepage</Link>
           </li>
           <li>
             <Link to="/contact">Contact</Link>
           </li>
         </ul>
       </nav>
     </header>
    );
  }
}

export default Navigation;
