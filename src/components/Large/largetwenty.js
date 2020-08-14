import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo20 from '../../images/lar/lo20.png';
import Bg20 from '../../images/lar/bg20.png';

export default class Largetwenty extends Component {
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
                  <h2>20</h2>
                </div>
                <div>
                  <img src={Lo20} />
                </div>
                <div >
                  <p>The Jellyvision Lab</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Chicago, Ill.</p>
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
          <p>Jellyvision is a technology company whose interactive software talks people through important, complex and potentially snooze-inducing life decisions -- like choosing a healthcare insurance plan, saving for retirement or navigating a leave of absence -- in simple, fun, and engaging ways.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg20} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Chicago, Ill.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1989</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>SaaS</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>372</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.jellyvision.com">	https://www.jellyvision.com</a></p>                        
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
