import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo3 from '../../images/lar/lo3.png';
import Bg3 from '../../images/lar/bg3.png';

export default class Largethree extends Component {
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
                  <h2>3</h2>
                </div>
                <div>
                  <img src={Lo3} />
                </div>
                <div >
                  <p>HubSpot</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Cambridge, Mass.</p>
              </div>
              <div className="company-div__sector">
                <p>B2B Software</p>
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
          <p>HubSpot is an inbound marketing, sales and CRM growth stack. HubSpot Marketing includes social media publishing and monitoring, blogging, SEO, website content management, email marketing, marketing automation and reporting and analytics. HubSpot Sales enables sales and service teams to have more effective conversations with leads, prospects and customers. HubSpot CRM helps sales teams organize, track and grow their pipeline.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg3} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Needham, Mass.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2006</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>B2B Software</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>1633</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://www.hubspot.com/">	https://www.hubspot.com/</a></p>                        
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
