import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo13 from '../../images/lar/lo13.png';
import Bg13 from '../../images/lar/bg13.png';

export default class Largethirteen extends Component {
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
                <h2>13</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo13} />
              </div>
              <div  className="company-div__name">
                <p>Instructure</p>
              </div>
              <div className="company-div__location">
                <p>Salt Lake City, Utah</p>
              </div>
              <div className="company-div__sector">
                <p>SaaS</p>
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
          <p>Instructure makes teaching and learning easier through open, usable, cloud-based technologies. It has connected millions of instructors and learners at more than 3,000 higher-ed, K–12 and corporate institutions throughout the world.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg13} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Salt Lake City, Utah</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2008</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>SaaS</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>1017</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.instructure.com/">	https://www.instructure.com/</a></p>                        
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
