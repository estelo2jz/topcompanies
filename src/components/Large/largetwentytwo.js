import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo22 from '../../images/lar/lo22.png';
import Bg22 from '../../images/lar/bg22.png';

export default class Largetwentytwo extends Component {
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
                <h2>22</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo22} />
              </div>
              <div  className="company-div__name">
                <p>CrossCountry Mortgage</p>
              </div>
              <div className="company-div__location">
                <p>Brecksville, Ohio</p>
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
          <p>CrossCountry Mortgage is a nationwide full service lender that offers a full range of home financing, refinancing and equity-based products.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg22} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Brecksville, Ohio</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2003</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Mortgage Lending</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>1871</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	http://www.crosscountrymortgage.com">	http://www.crosscountrymortgage.com</a></p>                        
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
