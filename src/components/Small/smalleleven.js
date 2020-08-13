import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo11 from '../../images/logo11.png';
import Bg11 from '../../images/bg/bg11.png';

export default class Smalleleven extends Component {
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
                <h2>11</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo11} />
              </div>
              <div  className="company-div__name">
                <p>Cool Breeze Beverages</p>
              </div>
              <div className="company-div__location">
                <p>Tampa, Fla.</p>
              </div>
              <div className="company-div__sector">
                <p>Distribution, Logistics, and Freight</p>
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
          <p>Cool Breeze Beverages is an international distribution company. It carries products, provides rental machines and services on bar equipment/machines.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg11} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Tampa, Fla.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2015</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Distribution, Logistics, and Freight</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>37</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.coolbreezebeverages.com/">https://www.coolbreezebeverages.com/</a></p>                        
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
