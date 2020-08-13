import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo20 from '../../images/logo20.png';
import Bg20 from '../../images/bg/bg20.png';

export default class Smalltwenty extends Component {
  constructor() {
    super();

    this.state = {
      showMe: false
    }
  }
  operation() {
    this.setState({
      showMe: !this.state.showMe
    });
  }
  render() {
    return (
      <div className="company-container">
        <div className="company-inner-container">
          <div onClick={() => this.operation()}>
            <div className="company-grid">
              <div className="company-div__number">
                <h2>20</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo20} />
              </div>
              <div  className="company-div__name">
                <p>Polyset Company</p>
              </div>
              <div className="company-div__location">
                <p>Mechanicville, N.Y.</p>
              </div>
              <div className="company-div__sector">
                <p>Technology-Driven Materials</p>
              </div>
            </div>
          </div>
        </div>
          { this.state.showMe ? 
            <div className="company-bio-container">
              <Bio />
            </div> 
          : null }
      </div>
    )
  }
}

function Bio() {
  return (
    <div className="bio-outer-container">
      <div className="bio-container">
        <div className="bio-summary">
          <p>Polyset is a custom formulator of coatings, adhesives, sealants and elastomer systems.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg20} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Mechanicville, N.Y.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1980</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Technology-Driven Materials</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>40</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.polyset.com">http://www.polyset.com</a></p>                        
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://twitter.com/home?lang=en">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/feed/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
