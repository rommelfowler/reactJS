import React, { Component } from 'react';
// Components
import Section from './section';

// CSS
import './css/portfolio.css';

// export var version = "version:1.0.1";

//NOTE we took out export and send in data to Portfolio
class FolioItem extends Component { //react needs a capitalize starter letter
  //Constructor - instatiator of the class
  constructor( props ) { //expects the props property
    super(props); //this calls out props

    // initiate state
    this.state = {hasImage:true};
    // this is needed or onUpdateImageState() function looses scope.
    // NOTE: everytime onUpdateImageState is called, this refers to the class
    this.onUpdateImageState = this.onUpdateImageState.bind(this);
  }
  onUpdateImageState(e){
    // console.log(this);
    // this setState method makes the images dissapear after the click event.
    this.setState({hasImage:false});
    // using an arrow function. These are the same as any function call
    setTimeout(()=>{
      this.setState({hasImage:true});
    },1000);
  } // end of onUpdateImageState

  render(){
    let path = `../../img/portfolio/${this.props.data.img}.jpg`; //simple expression calls full path of link
    // console.log(path);
    return(
      <div onClick={this.onUpdateImageState} className="item">
      {/*terinary operator - use this.state.hasImage*/}
        {this.state.hasImage ? <img src={path} alt="" className="bg_img" /> : null}
        <div className="text_wrapper">
          <div className="text_position">
            <h2 className="item--title">{this.props.data.title}</h2>
            <h2 className="item--title"> <a href={this.props.data.link}>{this.props.data.imgTitle}</a> </h2>
          </div>
        </div>
      </div>
    );
  }
} // end of FolioItem

export default class Portfolio extends Component {
  render() {
    let children = [];
    /*If passing in data-you need a unique key ID */
    for ( let item of this.props.data) {
      children.push(<FolioItem data={item} key={children.legnth}/>);
    }
    return(
      <div className="container">
        <Section id="portfolio" title="Portfolio"></Section>
        <div className="col-sm-12">
          {children}
        </div>

      </div>// end-container

    );
  }
}
