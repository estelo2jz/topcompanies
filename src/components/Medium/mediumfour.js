import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo4 from '../../images/med/lo4.png';
import Bg4 from '../../images/med/bg4.png';

export default class Mediumten extends Component {
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
                <h2>4</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo4} />
              </div>
              <div  className="company-div__name">
                <p>CBH Homes</p>
              </div>
              <div className="company-div__location">
                <p>Meridian, Idaho</p>
              </div>
              <div className="company-div__sector">
                <p>New Home Construction</p>
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
          <p>CBH Homes is a home builder and real-estate firm.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg4} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Denver, Colo.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1992</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>New Home Construction</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>89</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://cbhhomes.com/">https://cbhhomes.com/</a></p>                        
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
