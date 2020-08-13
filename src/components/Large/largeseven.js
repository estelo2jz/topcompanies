import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo7 from '../../images/lar/lo7.png';
import Bg7 from '../../images/lar/bg7.png';

export default class Largeseven extends Component {
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
                <h2>7</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo7} />
              </div>
              <div  className="company-div__name">
                <p>Weifield Group Contracting</p>
              </div>
              <div className="company-div__location">
                <p>Centennial, Colo.</p>
              </div>
              <div className="company-div__sector">
                <p>Electrical</p>
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
          <p>Weifield Group Contracting provides cutting-edge electrical construction, professional expertise of its employees and innovative technologies to build energy-efficient buildings</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg7} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Centennial, Colo.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2002</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Electrical</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>354</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.weifieldcontracting.com/">http://www.weifieldcontracting.com/</a></p>                        
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
