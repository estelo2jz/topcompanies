import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo10 from '../../images/lar/lo10.png';
import Bg10 from '../../images/lar/bg10.png';

export default class Largeten extends Component {
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
                  <h2>10</h2>
                </div>
                <div>
                  <img src={Lo10} />
                </div>
                <div >
                  <p>CWS Apartment Homes</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Austin, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Property Management</p>
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
          <p>Apartment Homes is a real-estate management company specializing in the acquisition, development, and repositioning of apartment communities in fast growing U.S. cities.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg10} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Austin, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2007</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Property Management</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>93</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.accelerationpartners.com/">	https://www.accelerationpartners.com/</a></p>                        
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
