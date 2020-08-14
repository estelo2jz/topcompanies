import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo19 from '../../images/logo19.png';
import Bg19 from '../../images/bg/bg19.png';

export default class Smallnineteen extends Component {
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
                  <h2>19</h2>
                </div>
                <div>
                  <img src={Logo19} />
                </div>
                <div >
                  <p>Harvest Group</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Rogers, Ark.</p>
              </div>
              <div className="company-div__sector">
                <p>Consumer Goods</p>
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
          <p>The Harvest Group is an omni-channel agency that provides full-service management teams and consulting services for consumer packaged goods companies at the world's largest retailers.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg19} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Rogers, Ark.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2006</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Consumer Goods</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>63</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.harvestgroup.com">	https://www.harvestgroup.com</a></p>                        
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
