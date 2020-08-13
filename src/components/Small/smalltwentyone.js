import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo21 from '../../images/logo21.png';
import Bg21 from '../../images/bg/bg21.png';

export default class Smalltwentyone extends Component {
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
                <h2>21</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo21} />
              </div>
              <div  className="company-div__name">
                <p>Smashtech</p>
              </div>
              <div className="company-div__location">
                <p>San Diego, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Ecommerce</p>
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
          <p>Smashtech creates healthy lifestyle brands. The company does everything in-house, including research and development, manufacturing, design, branding, marketing, media, sales and customer service.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg21} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> San Diego, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2015</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Ecommerce</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>58</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.smashtech.com/">https://www.smashtech.com/</a></p>                        
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
