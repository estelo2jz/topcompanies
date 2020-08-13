import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo17 from '../../images/logo17.png';
import Bg17 from '../../images/bg/bg17.png';

export default class Smallseventeen extends Component {
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
                <h2>17</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo17} />
              </div>
              <div  className="company-div__name">
                <p>Trios Salon</p>
              </div>
              <div className="company-div__location">
                <p>Omaha, Neb.</p>
              </div>
              <div className="company-div__sector">
                <p>Hair Salon</p>
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
          <p>Trios Salon is a Nebraska employee-based hair focused salon. It provides luxury services and experiences for its guests while providing a team-based culture for its employees.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg17} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Omaha, Neb.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2005</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Hair Salon</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>39</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.triossalon.com">http://www.triossalon.com</a></p>                        
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
