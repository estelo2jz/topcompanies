import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo8 from '../../images/lar/lo8.png';
import Bg8 from '../../images/lar/bg8.png';

export default class Largeeight extends Component {
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
                <h2>8</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo8} />
              </div>
              <div  className="company-div__name">
                <p>Cohesity</p>
              </div>
              <div className="company-div__location">
                <p>San Jose, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Infrastructure Software</p>
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
          <p>Cohesity makes its customers' data work for them by consolidating secondary storage silos onto a hyperconverged, web-scale data platform that spans both private and public clouds. Cohesity counts many global 1000 companies and federal agencies among its customer base.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg8} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>San Jose, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Infrastructure Software</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>382</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.cohesity.com/">https://www.cohesity.com/</a></p>                        
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
