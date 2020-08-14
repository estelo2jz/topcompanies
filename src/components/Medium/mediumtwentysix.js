import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo26 from '../../images/med/lo26.png';
import Bg26 from '../../images/med/bg26.jpg';

export default class Mediumtwentysix extends Component {
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
                  <h2>26</h2>
                </div>
                <div>
                  <img src={Lo26} />
                </div>
                <div >
                  <p>Home Instead</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Omaha, Neb.</p>
              </div>
              <div className="company-div__sector">
                <p>Senior Care</p>
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
          <p>The Home Instead Senior Care network provides personalized care, support and education to help enhance the lives of aging adults and their families.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg26} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Omaha, Neb.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1994</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Senior Care</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>170</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.homeinstead.com//">https://www.homeinstead.com//</a></p>                        
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
