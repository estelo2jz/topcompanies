import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo7 from '../../images/logo7.png';
import Bg7 from '../../images/bg/bg7.png';

export default class Smallseven extends Component {
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
                <h2>7</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo7} />
              </div>
              <div  className="company-div__name">
                <p>Cockroach Labs</p>
              </div>
              <div className="company-div__location">
                <p>New York, N.Y.</p>
              </div>
              <div className="company-div__sector">
                <p>Database Solutions</p>
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
          <p>Cockroach Labs is the company behind CockroachDB, the SQL database for building global cloud services.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg7} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> New York, N.Y.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2015</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Database Solutions</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>49</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.cockroachlabs.com/">https://www.cockroachlabs.com/</a></p>                        
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
