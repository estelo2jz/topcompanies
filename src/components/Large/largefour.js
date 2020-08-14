import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo4 from '../../images/lar/lo4.png';
import Bg4 from '../../images/lar/bg4.png';

export default class Largefour extends Component {
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
                  <h2>4</h2>
                </div>
                <div>
                  <img src={Lo4} />
                </div>
                <div >
                  <p>Power Home Remodeling Group</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Chester, Pa.</p>
              </div>
              <div className="company-div__sector">
                <p>Home Improvement and Remodeling</p>
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
          <p>Power Home Remodeling Group is an exterior home remodeler. It provides energy-saving and environmentally friendly remodeling solutions to residents across its operating territories.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg4} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Chester, Pa.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1992</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Home Improvement and Remodeling</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>2284</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.powerhrg.com">http://www.powerhrg.com</a></p>                        
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
