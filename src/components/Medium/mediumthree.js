import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo3 from '../../images/med/lo3.png';
import Bg3 from '../../images/med/bg3.png';

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
                <h2>3</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo3} />
              </div>
              <div  className="company-div__name">
                <p>8z Real Estate</p>
              </div>
              <div className="company-div__location">
                <p> Boulder, Colo.</p>
              </div>
              <div className="company-div__sector">
                <p>Agents / Brokers</p>
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
          <p></p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg3} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Boulder, Colo.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2009</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Agents / Brokers</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>159</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://8z.com">https://8z.com</a></p>                        
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
