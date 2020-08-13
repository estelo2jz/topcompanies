import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo26 from '../../images/logo26.png';
import Bg26 from '../../images/bg/bg26.jpg';

export default class Smalltwentysix extends Component {
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
                <h2>26</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo26} />
              </div>
              <div  className="company-div__name">
                <p>Actualize Consulting</p>
              </div>
              <div className="company-div__location">
                <p>Reston, Va.</p>
              </div>
              <div className="company-div__sector">
                <p>Financial Services Consulting</p>
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
          <p>Actualize Consulting is a professional services firm specializing in business process engineering and technology implementations for financial institutions</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg26} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Reston, Va.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2003</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Financial Services Consulting</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>48</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.actualizeconsulting.com/">http://www.actualizeconsulting.com/</a></p>                        
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
