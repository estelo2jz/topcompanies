import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo11 from '../../images/med/lo11.png';
import Bg11 from '../../images/med/bg11.png';

export default class Mediumeleven extends Component {
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
                  <h2>11</h2>
                </div>
                <div>
                  <img src={Lo11} />
                </div>
                <div >
                  <p>Liftoff Mobile</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Palo Alto, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Enterprise Software</p>
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
          <p>Liftoff is a mobile app marketing and retargeting platform that uses post-install data to run true ROI-optimized user acquisition and retention campaigns. With Liftoff, campaigns are optimized to drive actions beyond the install or making a purchase.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg11} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Palo Alto, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2021</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Enterprise Software</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>84</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	http://www.liftoff.io">	http://www.liftoff.io</a></p>                        
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
