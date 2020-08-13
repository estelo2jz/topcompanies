import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo29 from '../../images/logo29.png';
import Bg29 from '../../images/bg/bg29.png';

export default class Smalltwentynine extends Component {
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
                <h2>29</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo29} />
              </div>
              <div  className="company-div__name">
                <p>Möbius Partners</p>
              </div>
              <div className="company-div__location">
                <p>San Antonio, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Value Added Reseller</p>
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
          <p>Möbius Partners provides clients with advanced and strategic technologies to help them innovate, transform and deliver positive business outcomes.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg29} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> San Antonio, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2000</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Value Added Reseller</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>35</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.mobiuspartners.com">http://www.mobiuspartners.com</a></p>                        
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
