import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo9 from '../../images/med/lo9.png';
import Bg9 from '../../images/med/bg9.png';

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
              <div className="company-div__container">
                <div>
                  <h2>9</h2>
                </div>
                <div>
                  <img src={Lo9} />
                </div>
                <div >
                  <p>HNI Risk Services</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>New Berlin, Wis.</p>
              </div>
              <div className="company-div__sector">
                <p>General Insurance</p>
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
          <p>HNI Risk Services is a risk-advising company that provides insurance, benefits and strategies to its clients.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg9} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Denver, Colo.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1963</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Advertising Technology and Software</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>137</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	http://www.hni.com">	http://www.hni.com</a></p>                        
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
