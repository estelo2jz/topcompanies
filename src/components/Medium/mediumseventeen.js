import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo17 from '../../images/med/lo17.png';
import Bg17 from '../../images/med/bg17.jpg';

export default class Mediumseventeen extends Component {
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
                  <h2>17</h2>
                </div>
                <div>
                  <img src={Lo17} />
                </div>
                <div >
                  <p>Zlien</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>New Orleans, La.</p>
              </div>
              <div className="company-div__sector">
                <p>Web-Based Services</p>
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
          <p>Zlien is a collaboration-driven construction payment ecosystem that completes job information and empowers contractors, suppliers and other industry stakeholders to always get what they've earned. Customers use Zlien to exchange and collaborate around payment documents like lien waivers, pay applications and preliminary notices, and to complete the picture of who else is on their job, enabling better visibility, smooth paperwork exchanges and faster payments.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg17} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>New Orleans, La.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2007</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Web-Based Services</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>84</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.zlien.com/">https://www.zlien.com/</a></p>                        
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
