import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo1 from '../../images/med/lo1.png';
import Bg1 from '../../images/med/bg1.png';

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
              <div className="company-div__number">
                <h2>1</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo1} />
              </div>
              <div  className="company-div__name">
                <p>Zurixx</p>
              </div>
              <div className="company-div__location">
                <p> Cottonwood Heights, Utah</p>
              </div>
              <div className="company-div__sector">
                <p>Financial Education</p>
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
          <p>Zurixx develops, promotes, sells and fulfills financial education programs throughout the United States and Canada. Its multi-phase educational process equips students with the tools, knowledge and resources they need to be financially successful. Zurixx partners with internationally-known celebrities from ABC, A&E, HGTV, and DIY Networks.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg1} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Cottonwood Heights, Utah</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2012</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Financial Education</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>81</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.zurixx.com">	http://www.zurixx.com</a></p>                        
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
