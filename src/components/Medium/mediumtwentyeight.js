import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo28 from '../../images/med/lo28.png';
import Bg28 from '../../images/med/bg28.png';

export default class Mediumtwentyeight extends Component {
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
                  <h2>28</h2>
                </div>
                <div>
                  <img src={Lo28} />
                </div>
                <div >
                  <p>RPM</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Royal Oak, Mich.</p>
              </div>
              <div className="company-div__sector">
                <p>Logistics</p>
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
          <p>RPM manages all transportation needs across the entire spectrum of any supply chain. Its freight, vehicle and bulk divisions are driven via advanced proprietary technology and managed by its customer and carrier -acing teams.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg28} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Royal Oak, Mich.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2012</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Logistics</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>133</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.loadrpm.com">http://www.loadrpm.com</a></p>                        
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
