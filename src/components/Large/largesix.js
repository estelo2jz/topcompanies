import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo6 from '../../images/lar/lo6.png';
import Bg6 from '../../images/lar/bg6.png';

export default class Largesix extends Component {
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
                <h2>6</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo6} />
              </div>
              <div  className="company-div__name">
                <p>Integration Partners</p>
              </div>
              <div className="company-div__location">
                <p>Lexington, Mass.</p>
              </div>
              <div className="company-div__sector">
                <p>Value Added Reseller</p>
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
         <p>Integration Partners is an IT services engineering firm specializing in solutions that are open, scalable and drive to greater productivity and competitiveness for our clients. Its solutions and services portfolio provide enterprises with cloud, security, collaboration, core infrastructure and managed services.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg6} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Lexington, Mass.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1999</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Value Added Reseller</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>355</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://integrationpartners.com/">https://integrationpartners.com/</a></p>                        
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
