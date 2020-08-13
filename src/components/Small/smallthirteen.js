import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo13 from '../../images/logo13.png';
import Bg13 from '../../images/bg/bg13.png';

export default class Smallthirteen extends Component {
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
                <h2>13</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo13} />
              </div>
              <div  className="company-div__name">
                <p>BitGo</p>
              </div>
              <div className="company-div__location">
                <p> Palo Alto, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Cryptocurrency</p>
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
          <p>BitGo offers institutional-grade cryptocurrency investment services, providing institutional investors with security, compliance and custodial solutions for blockchain-based currencies.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg13} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>  Palo Alto, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2004</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Cryptocurrency</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>43</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://thisisgrow.com">https://thisisgrow.com</a></p>                        
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