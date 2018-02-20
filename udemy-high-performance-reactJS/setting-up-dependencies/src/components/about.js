// React
import React, { Component } from 'react';
// Components
import Section from "./section";




export default class About extends Component {
  render(){
    return(
      <Section className="container" id="about" title="About">

        <div className="col-lg-12">
          <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The
          download includes the complete source files including HTML, CSS, and
          JavaScript as well as optional LESS stylesheets for easy customization.</p>
        </div>

      </Section>


    );
  }
}
