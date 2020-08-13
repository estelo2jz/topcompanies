import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo15 from '../../images/lar/lo15.png';
import Bg15 from '../../images/lar/bg15.png';

export default class Largefifteen extends Component {
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
                <h2>15</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo15} />
              </div>
              <div  className="company-div__name">
                <p>American Advisors Group</p>
              </div>
              <div className="company-div__location">
                <p>Orange, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Mortgage Lending</p>
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
          <p>American Advisors Group offers a suite of home equity solutions -- including home equity conversion mortgages, traditional and proprietary mortgages and real estate services -- that are designed to give seniors a better financial outcome in retirement.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg15} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Orange, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2004</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Mortgage Lending</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>1210</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.aag.com">http://www.aag.com</a></p>                        
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
