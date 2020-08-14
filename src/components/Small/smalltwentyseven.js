import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo27 from '../../images/logo27.png';
import Bg27 from '../../images/bg/bg27.png';

export default class Smalltwentyseven extends Component {
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
                  <img src={Logo27} />
                </div>
                <div >
                  <p>Student Loan Hero</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Austin, Texas</p>
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
          <p>Student Loan Hero combines easy-to-use tools with financial education to help millions of Americans living with student loan debt manage and pay off their loans.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg27} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Austin, Texas</p>
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
              <p>58</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://studentloanhero.com/">https://studentloanhero.com/</a></p>                        
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
