import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo15 from '../../images/med/lo15.png';
import Bg15 from '../../images/med/bg15.png';

export default class Mediumfifteen extends Component {
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
              <div className="company-div__container">
                <div>
                  <h2>15</h2>
                </div>
                <div>
                  <img src={Lo15} />
                </div>
                <div >
                  <p>Acceleration Partners</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Needham, Mass.</p>
              </div>
              <div className="company-div__sector">
                <p>Advertising and Marketing</p>
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
          <p>Acceleration Partners is an affiliate marketing agency focused on delivering brand-aligned customer acquisition programs for the world’s largest brands.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg15} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Needham, Mass.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2007</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Advertising and Marketing</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>93</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.accelerationpartners.com/">	https://www.accelerationpartners.com/</a></p>                        
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
