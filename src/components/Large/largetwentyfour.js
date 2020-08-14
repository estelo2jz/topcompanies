import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo24 from '../../images/lar/lo24.png';
import Bg24 from '../../images/lar/bg24.png';

export default class Largetwentyfour extends Component {
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
              <div  className="company-div__container">
                <div>
                  <h2>24</h2>
                </div>
                <div>
                  <img src={Lo24} />
                </div>
                <div>
                  <p>WebPT</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Phoenix, Ariz.</p>
              </div>
              <div className="company-div__sector">
                <p>Software</p>
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
          <p>WebPT is a rehab therapy platform for enhancing patient care and fueling business growth. Offering scheduling, documentation, billing, outcomes tracking, business reporting and system integrations, WebPT’s web-based solution is ideal for every outpatient setting -- regardless of staff size, facility type, or the number of specialties.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg24} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Phoenix, Ariz.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2008</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Software</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>475</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.webpt.com">http://www.webpt.com</a></p>                        
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
