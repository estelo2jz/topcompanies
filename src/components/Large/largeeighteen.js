import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo18 from '../../images/lar/lo18.png';
import Bg18 from '../../images/lar/bg18.png';

export default class Largeeighteen extends Component {
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
                <h2>18</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo18} />
              </div>
              <div  className="company-div__name">
                <p>Inpro</p>
              </div>
              <div className="company-div__location">
                <p>Muskego, Wis.</p>
              </div>
              <div className="company-div__sector">
                <p>Building Products</p>
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
          <p>Inpro is a provider of door and wall protection, sustainable building products, expansion joint systems and decorative surface products.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg18} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Muskego, Wis.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1979</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Building Products</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>601</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.inprocorp.com">http://www.inprocorp.com</a></p>                        
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
