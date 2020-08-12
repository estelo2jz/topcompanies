import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo3 from '../../images/logo3.png';
import Bg3 from '../../images/bg/bg3.png';

export default class Smallthree extends Component {
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
                <h2>3</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo3} />
              </div>
              <div  className="company-div__name">
                <p>Maz</p>
              </div>
              <div className="company-div__location">
                <p> ew York, N.Y.</p>
              </div>
              <div className="company-div__sector">
                <p>Content Logistics</p>
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
          <p>Maz has built a content distribution platform used by brands such as Forbes, Hearst and Bloomberg media. Its ability to increase audience reach, engagement and revenue performance is key to its partnership with hundreds of media brands.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg3} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>New York, N.Y.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2010</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Content Logistics</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>37</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.mazsystems.com">http://www.mazsystems.com</a></p>                        
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
