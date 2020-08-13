import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo16 from '../../images/logo16.png';
import Bg16 from '../../images/bg/bg16.jpg';

export default class Smallsixteen extends Component {
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
                <h2>16</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo16} />
              </div>
              <div  className="company-div__name">
                <p>Client Command</p>
              </div>
              <div className="company-div__location">
                <p>Cumming, Ga.</p>
              </div>
              <div className="company-div__sector">
                <p>Advertising</p>
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
          <p>Client Command is a marketing technology company delivering first party-data-driven omni-channel solutions for automotive dealers.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg16} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Cumming, Ga.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1999</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Advertising</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>73</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://clientcommand.com/">https://clientcommand.com/</a></p>                        
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
