import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo12 from '../../images/lar/lo12.png';
import Bg12 from '../../images/lar/bg12.png';

export default class Largetwelve extends Component {
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
                <h2>12</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo12} />
              </div>
              <div  className="company-div__name">
                <p>Pivotal Software</p>
              </div>
              <div className="company-div__location">
                <p>San Francisco, Calif.</p>
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
          <p>Pivotal Software combines its cloud-native platform, tools and methodology to empower the world’s largest organizations to adapt to change and build great software.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg12} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>San Francisco, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Enterprise Software</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>2000</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://pivotal.io/">https://pivotal.io/</a></p>                        
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
