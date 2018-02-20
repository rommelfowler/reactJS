import React, {Component} from 'react';


export default class Header extends Component {
  render(){
    // console.log(this.props.title.startsWith("Master"));
    // endsWith, includes

    let {title, skills} = this.props.data;

    return(
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src="" alt="" className="img-responsive"/>
              <div className="intro-text">
                <span className="name">{title}</span>
                <hr className="star-light"/>
                <span className="skills">{skills}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
