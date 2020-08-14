import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo15 from '../../images/med/lo15.png';
import Bg15 from '../../images/med/bg15.png';

export default class Mediumfifteen extends Component {
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
                  <h2>15</h2>
                </div>
                <div>
                  <img src={Lo15} />
                </div>
                <div >
                  <p>SpareFoot</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Austin, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Moving and Storage</p>
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
          <p>SpareFoot.com is a marketplace for storage, making it easier to move and store your stuff. Its website lets you find and compare storage deals and rent online or by phone for free.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg15} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Austin, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2008</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Moving and Storage</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>90</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.sparefoot.com/">https://www.sparefoot.com/</a></p>                        
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
