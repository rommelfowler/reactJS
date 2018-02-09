// React
import React, { Component } from 'react';

export default class Section extends Component {
  render(){
    return(
      <div className={this.props.className} id={this.props.id} >
      <div className="row">
        <h2>{this.props.title}</h2>
      </div>

      <div className="row">
        {this.props.children}
      </div>


      </div>
    );
  }
}
