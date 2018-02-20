import React, {Component} from "react";


class NavItem extends Component {

  static get defaultProps(){
    return {
      className: "Ypage-scroll"
    };
  }
  render(){
    return(
      <li {...this.props}>
          <a onClick={this.props.onLinkClick} href={this.props.link}>{this.props.name}</a>
      </li>
    );
  }
}

export default class Nav extends Component {


  render() {
    let firstData = this.props.data[0], //strips the first data
    a = this.props.data.slice(1); //this is the rest of the array
        // console.log("firstData: ", firstData, "array: ", array);
    a.forEach((e, i, a) => { //forEach needs an e=element, i=index, a=array
      a[i] = <NavItem onClick={this.props.onClick} key={e.link} {...e} />;

    });
    return(
<nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="navbar-header page-scroll">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href={firstData.link}>{firstData.name}</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <NavItem className="hidden" link="#page-top"/>
          {a} {/*check array forEach()*/}

        </ul>
    </div>
</nav>

    );
  }
}
