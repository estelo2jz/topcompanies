import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo25 from '../../images/logo25.png';
import Bg25 from '../../images/bg/bg25.png';

export default class Smalltwentyfive extends Component {
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
                <h2>25</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo25} />
              </div>
              <div  className="company-div__name">
                <p>Ervin & Smith</p>
              </div>
              <div className="company-div__location">
                <p>Omaha, Neb.</p>
              </div>
              <div className="company-div__sector">
                <p>Branding, Marketing and Advertising</p>
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
          <p>Ervin & Smith is a digital agency that helps keep brands relevant through a combination of owned, earned, shared and paid media. It provide services, consulting and training for marketing efforts that include branding, social media, content marketing, web design and development, SEO and public relations.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg25} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Omaha, Neb.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1983</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Branding, Marketing and Advertising</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>41</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.ervinandsmith.com">http://www.ervinandsmith.com</a></p>                        
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
