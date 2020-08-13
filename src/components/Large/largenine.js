import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo9 from '../../images/lar/lo9.png';
import Bg9 from '../../images/lar/bg9.png';

export default class Largenine extends Component {
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
                <h2>9</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo9} />
              </div>
              <div  className="company-div__name">
                <p>Pluralsight</p>
              </div>
              <div className="company-div__location">
                <p>Farmington, Utah</p>
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
          <p>Pluralsight is a technology learning platform that helps enterprises learn and adopt the most critical technologies faster. With Pluralsight, CIOs, CTOs and technology leaders can align specific skill sets to relevant projects, support business objectives and drive the company’s next phase of innovation on time, on budget, and securely.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg9} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Farmington, Utah</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2004</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>SaaS</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>823</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.pluralsight.com/">https://www.pluralsight.com/</a></p>                        
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
