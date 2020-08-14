import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo27 from '../../images/med/lo27.png';
import Bg27 from '../../images/med/bg27.jpg';

export default class Mediumtwentyseven extends Component {
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
                  <h2>27</h2>
                </div>
                <div>
                  <img src={Lo27} />
                </div>
                <div >
                  <p>Ubiquity Retirement + Savings</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>San Francisco, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Retirement</p>
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
          <p>Ubiquity Retirement + Savings is a flat-fee 401K provider for small businesses.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg27} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>San Francisco, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1999</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Retirement</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>80</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.myubiquity.com/">https://www.myubiquity.com/</a></p>                        
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
