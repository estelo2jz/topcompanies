import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo2 from '../../images/lar/lo2.png';
import Bg2 from '../../images/lar/bg2.png';

export default class Largetwo extends Component {
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
                <div>
                  <p>Berkshire Hathaway HomeServices Ambassador Real Estate</p>
                </div>
              </div>
              <div className="company-div__location">
                <p> Omaha, Neb.</p>
              </div>
              <div className="company-div__sector">
                <p>Agents and Brokers</p>
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
          <p>Berkshire Hathaway HomeServices Ambassador Real Estate offers real estate services that include relocation, fine homes, rentals, short sales, commercial and investment properties.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg2} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Omaha, Neb.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1984</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Agents and Brokers</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>661</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.bhhsamb.com/">https://www.bhhsamb.com/</a></p>                        
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
