import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo7 from '../../images/med/lo7.png';
import Bg7 from '../../images/med/bg7.png';

export default class Mediumten extends Component {
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
                  <h2>7</h2>
                </div>
                <div>
                  <img src={Lo7} />
                </div>
                <div >
                  <p>Metric Theory</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>San Francisco, Calif.</p>
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
          <p>Metric Theory provides technology-enhanced SEM, paid social and display advertising services for its clients.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg7} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>San Francisco, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2012</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Advertising</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>86</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://metrictheory.com/">https://metrictheory.com/</a></p>                        
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
