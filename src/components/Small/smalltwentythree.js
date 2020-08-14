import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo23 from '../../images/logo23.png';
import Bg23 from '../../images/bg/bg23.png';

export default class Smalltwentythree extends Component {
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
                  <h2>23</h2>
                </div>
                <div>
                  <img src={Logo23} />
                </div>
                <div >
                  <p>Impact</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Wallingford, Conn.</p>
              </div>
              <div className="company-div__sector">
                <p>Digital Marketing</p>
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
          <p>Impact is an inbound marketing and HubSpot Diamond Partner. Its mission is to help people and their organizations succeed by tackling their most trying digital marketing challenges through a mix of education, consulting, inspiration and honest, unfiltered advice.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg23} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Wallingford, Conn.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2009</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Digital Marketing</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>50</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.impactbnd.com/">	https://www.impactbnd.com/</a></p>                        
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
