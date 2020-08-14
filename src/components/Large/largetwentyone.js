import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo21 from '../../images/lar/lo21.png';
import Bg21 from '../../images/lar/bg21.png';

export default class Largetwentyone extends Component {
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
              <div className="company-div__container">
                <div>
                  <h2>21</h2>
                </div>
                <div>
                  <img src={Lo21} />
                </div>
                <div >
                  <p>Texas Capital Bank</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Dallas, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Commercial Banking</p>
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
          <p>Texas Capital Bank is a commercial bank that delivers personalized financial services to businesses and entrepreneurs. Texas Capital Bank is a wholly owned subsidiary of Texas Capital Bancshares, Inc.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg21} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Dallas, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1998</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Commercial Banking</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>1591</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	http://texascapitalbank.com">	http://texascapitalbank.com</a></p>                        
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
