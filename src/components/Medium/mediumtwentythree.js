import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo23 from '../../images/med/lo23.png';
import Bg23 from '../../images/med/bg23.jpg';

export default class Mediumtwentythree extends Component {
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
                  <h2>23</h2>
                </div>
                <div>
                  <img src={Lo23} />
                </div>
                <div >
                  <p>Swoon Group</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Chicago, Ill.</p>
              </div>
              <div className="company-div__sector">
                <p>Staffing Firm</p>
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
          <p>Swoon is a consulting and staffing firm that focuses on the people first and the placement second.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg23} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Chicago, Ill.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2010</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Staffing Firm</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>95</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://swoonstaffing.com/">	https://swoonstaffing.com/</a></p>                        
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
