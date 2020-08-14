import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo19 from '../../images/med/lo19.png';
import Bg19 from '../../images/med/bg19.jpg';

export default class Mediumnineteen extends Component {
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
                  <img src={Lo19} />
                </div>
                <div >
                  <p>ACV Auctions</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Buffalo, N.Y.</p>
              </div>
              <div className="company-div__sector">
                <p>Automotive</p>
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
          <p>ACV Auctions hosts live mobile auctions for new and used car dealers. Cars are listed and sold to dealerships nationwide in online, individual, 20-minute auctions without ever leaving the lot.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg19} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Buffalo, N.Y.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2015</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Automotive</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>246</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://acvauctions.com">http://acvauctions.com</a></p>                        
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
