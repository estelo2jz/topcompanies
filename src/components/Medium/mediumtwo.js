import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo2 from '../../images/med/lo2.png';
import Bg2 from '../../images/med/bg2.png';

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
              <div className="company-div__container">
                <div>
                  <h2>2</h2>
                </div>
                <div>
                  <img src={Lo2} />
                </div>
                <div >
                  <p>Upside Travel</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Washington, D.C.</p>
              </div>
              <div className="company-div__sector">
                <p>Travel / Vacation</p>
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
         <p>Upside is an online travel service exclusively for business travelers.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg2} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Washington, D.C.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2015</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Travel / Vacation</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>87</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.upside.com">	http://www.upside.com</a></p>                        
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
