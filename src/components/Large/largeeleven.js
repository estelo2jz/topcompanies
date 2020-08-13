import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo11 from '../../images/lar/lo11.png';
import Bg11 from '../../images/lar/bg11.png';

export default class Largeeleven extends Component {
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
                <h2>11</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo11} />
              </div>
              <div  className="company-div__name">
                <p>Kabbage</p>
              </div>
              <div className="company-div__location">
                <p>Atlanta, Ga.</p>
              </div>
              <div className="company-div__sector">
                <p>Financial Data Technology</p>
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
          <p>Kabbage is a financial services data and technology platform that provides access to automated funding to small businesses in minutes. Kabbage leverages data generated through business activity such as accounting data, online sales, shipping and dozens of other sources to understand performance and deliver fast, flexible funding in real time.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg11} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Atlanta, Ga.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2009</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Financial Data Technology</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>315</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.kabbage.com/">https://www.kabbage.com/</a></p>                        
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
