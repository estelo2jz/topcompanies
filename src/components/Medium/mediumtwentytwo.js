import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo22 from '../../images/med/lo22.png';
import Bg22 from '../../images/med/bg22.jpg';

export default class Mediumtwentytwo extends Component {
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
                  <h2>22</h2>
                </div>
                <div>
                  <img src={Lo22} />
                </div>
                <div >
                  <p>Verified First</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Meridian, Idaho</p>
              </div>
              <div className="company-div__sector">
                <p>Background Screening and Pre-Employment Services</p>
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
          <p>Verified First is a background screening company that helps businesses with its employment decisions by providing the most accurate information available.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg22} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Meridian, Idaho</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Background Screening and Pre-Employment Services</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>85</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.verifiedfirst.com/">http://www.verifiedfirst.com/</a></p>                        
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
