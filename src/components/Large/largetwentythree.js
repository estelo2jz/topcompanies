import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo23 from '../../images/lar/lo23.png';
import Bg23 from '../../images/lar/bg23.png';

export default class Largetwentythree extends Component {
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
                  <img src={Lo23} />
                </div>
                <div >
                  <p>Nextiva</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Scottsdale, Ariz.</p>
              </div>
              <div className="company-div__sector">
                <p>Business Cloud Communications</p>
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
          <p>Nextiva provides a cloud communications platform that includes VoIP, data analytics, hosted call center, cloud backup and storage and virtual fax.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg23} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Scottsdale, Ariz.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2008</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Business Cloud Communications</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>598</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.nextiva.com/">	https://www.nextiva.com/</a></p>                        
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
