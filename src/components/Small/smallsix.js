import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo6 from '../../images/logo6.png';
import Bg6 from '../../images/bg/bg6.jpg';

export default class Smallsix extends Component {
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
                  <h2>6</h2>
                </div>
                <div>
                  <img src={Logo6} />
                </div>
                <div >
                  <p>AdvicePeriod</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Los Angeles, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Wealth Management</p>
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
          <p>AdvicePeriod is reinventing wealth management with its national network of like-minded financial advisors who are committed to leveraging technology to impact more lives, reduce fees and deliver the client experience of the future. It focus on combining actionable financial and estate planning advice with objective investment guidance.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg6} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Los Angeles, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2014</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Wealth Management</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>37</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	http://www.adviceperiod.com/">	http://www.adviceperiod.com/</a></p>                        
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
