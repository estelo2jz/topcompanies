import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo19 from '../../images/lar/lo19.png';
import Bg19 from '../../images/lar/bg19.png';

export default class Largenineteen extends Component {
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
                <h2>19</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo19} />
              </div>
              <div  className="company-div__name">
                <p>Resurgens Orthopaedics</p>
              </div>
              <div className="company-div__location">
                <p>Atlanta, Ga.</p>
              </div>
              <div className="company-div__sector">
                <p></p>
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
          <p>With more than 90 physicians Resurgens Orthopaedics is Georgia's largest orthopaedic practice. Specialty areas include spine and back care, joint replacement, sports medicine, hand, foot and workers'​ compensation. Resurgens provides full service medical care including rehabilitative therapy and imaging services.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg19} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Atlanta, Ga.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1986</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Physicians Practice</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>1000</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.resurgens.com">	https://www.resurgens.com</a></p>                        
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
