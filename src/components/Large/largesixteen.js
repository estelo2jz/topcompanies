import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo16 from '../../images/lar/lo16.png';
import Bg16 from '../../images/lar/bg16.png';

export default class Largesixteen extends Component {
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
                <h2>16</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo16} />
              </div>
              <div  className="company-div__name">
                <p>Total Quality Logistics</p>
              </div>
              <div className="company-div__location">
                <p>Cincinnati, Ohio</p>
              </div>
              <div className="company-div__sector">
                <p>Logistics</p>
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
          <p>Total Quality Logistics is a sales organization within the transportation logistics industry. Using technology and its services, Total Quality Logistics negotiates truckload, LTL and intermodal shipments for companies, matching them with carriers that have the capacity to move them.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg16} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Cincinnati, Ohio</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1997</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Logistics</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>4200</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.tql.com">http://www.tql.com</a></p>                        
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
