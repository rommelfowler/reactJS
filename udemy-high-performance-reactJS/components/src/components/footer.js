import React, {Component} from 'react';
import PropTypes from 'prop-types'; //in order to use static PropTypes, you must import the library

//This creates an element with title and paragraph with children
class Element extends Component {
  render(){
    return(
      <div className="footer-col col-md-4">
          <h3>{this.props.title}</h3>
          <p>{this.props.children}</p>
      </div>
    );
  }
}
//Adds an Element then adds the a title property and calls the content from
//class ComplexFooter
class TextFooter extends Component {
  /*NOTE: this is a getter that provides a default messge in case client
  fogets to add in data. */
  static get defaultProps() {
    return {
      title: "Forgot a title",
      content: "need content?"
    };
  }
  /* NOTE: This is used as a validator to check for errors.
  This says that the render() should be looking for strings and something
  that is renderable.*/
  static get propTypes() { //static getter (get). Can also use as setter (set)
   return {
     title: PropTypes.oneOfType([
       PropTypes.string,
       PropTypes.number,
     ]),//string makes sure the value is a string
     content: PropTypes.node, //node-takes value and outputs onto stage and makes sure it renders
     children: PropTypes.element.isRequired
   };
 } // Getters property - gets a value
  render(){
    return(
      <Element title={this.props.title}>
          {this.props.content}
      </Element>
    );
  }
}
//TODO-Configure SocialLink
// class SocialLink extends Component {
//   render(){
//     let className = "fa fa-fw fa-" + this.props.social;
//     return(
//       <li>
//           <a href={this.props.link} className="btn-social btn-outline">
//           <i className={className}></i></a>
//       </li>
//     );
//   }
// }
class ComplexFooter extends Component {

  render(){
    //  let content = <SocialLink/>;
    // console.log("content: ", content);
    //
    // let children = [];
    // for(let sl of this.props.content){
    //   let content = children.push(<SocialLink key={sl.name} {...sl} />);
    //   console.log("content: ", content);
    // }

    return (
      <Element title={this.props.title}>
              <h3>Around the Web</h3>
              <ul className="list-inline">
               {/*{children}*/}
                  <li><a href="https://www.facebook.com/StartBootstrap" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                  </li>
                  <li><a href="https://twitter.com/SBootstrap" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                  </li>
                  <li><a href="https://github.com/BlackrockDigital" class="btn-social btn-outline"><i class="fa fa-fw fa-github"></i></a>
                  </li>
              </ul>
      </Element>

    );
  }
}

export default class Footer extends Component {
  render(){
    return(
<footer className="text-center">
    <div className="footer-above">
        <div className="container">
            <div className="row">
              <TextFooter {...this.props.data[0]}/>
              <ComplexFooter/>
              <TextFooter {...this.props.data[2]}/>



            </div>
        </div>
    </div>
    <div className="footer-below">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    Copyright &copy; Your Website 2016
                </div>
            </div>
        </div>
    </div>
</footer>
    );
  }
}
