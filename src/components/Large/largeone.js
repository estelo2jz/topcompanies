import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo1 from '../../images/lar/lo1.png';
import Bg1 from '../../images/lar/bg1.png';

export default class Largeone extends Component {
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
                  <h2>1</h2>
                </div>
                <div>
                  <img src={Lo1} />
                </div>
                <div >
                  <p>Goosehead Insurance</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Westlake, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>General Insurance</p>
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
          <p>Goosehead Insurance is an independent personal lines insurance agency. Goosehead represents more than 80 insurance companies that underwrite personal lines and small commercial lines risks, and its operations include a network of seven corporate sales offices and more than 400 franchise locations.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg1} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Westlake, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>General Insurance</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>341</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.gooseheadinsurance.com/">https://www.gooseheadinsurance.com/</a></p>                        
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
