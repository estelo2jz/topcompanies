import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo14 from '../../images/med/lo14.png';
import Bg14 from '../../images/med/bg14.png';

export default class Mediumfourteen extends Component {
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
                  <h2>14</h2>
                </div>
                <div>
                  <img src={Lo14} />
                </div>
                <div >
                  <p>AccountingDepartment.com</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Bonita Springs, Fla.</p>
              </div>
              <div className="company-div__sector">
                <p>Bookkeeping and Controller Services</p>
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
          <p>AccountingDepartment.com is an bookkeeping and controller services that serves the businesses of entrepreneurs, executives, government contractors, and the like by providing an entire outsourced accounting department.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg14} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Bonita Springs, Fla.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2004</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Bookkeeping and Controller Services</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>106</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.accountingdepartment.com/">https://www.accountingdepartment.com/</a></p>                        
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
