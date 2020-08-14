import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo18 from '../../images/med/lo18.png';
import Bg18 from '../../images/med/bg18.png';

export default class Mediumeighteen extends Component {
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
                  <h2>18</h2>
                </div>
                <div>
                  <img src={Lo18} />
                </div>
                <div >
                  <p>PAN Communications</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Boston, Mass.</p>
              </div>
              <div className="company-div__sector">
                <p>Public Relations</p>
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
          <p>PAN Communications is a marketing and public relations agency for B2B tech and healthcare brands.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg18} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Boston, Mass.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1995</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Public Relations</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>124</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.pancommunications.com">https://www.pancommunications.com</a></p>                        
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
