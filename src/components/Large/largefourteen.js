import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo14 from '../../images/lar/lo14.png';
import Bg14 from '../../images/lar/bg14.png';

export default class Largefourteen extends Component {
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
                <h2>14</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo14} />
              </div>
              <div  className="company-div__name">
                <p>O.C. Tanner Company</p>
              </div>
              <div className="company-div__location">
                <p>Salt Lake City, Utah</p>
              </div>
              <div className="company-div__sector">
                <p>Employee Appreciation Services and Rewards</p>
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
          <p>O.C. Tanner develops employee recognition strategies and rewards programs that help companies appreciate people who do great work. Its cloud-based solutions allow people everywhere to share, like, and comment on each other’s great work, and leaders everywhere to use big data and analytics to better understand what drives great work in their organizations.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg14} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Salt Lake City, Utah</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1972</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Employee Appreciation Services and Rewards</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>1332</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.octanner.com">http://www.octanner.com</a></p>                        
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
