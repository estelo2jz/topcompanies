import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo29 from '../../images/med/lo29.png';
import Bg29 from '../../images/med/bg29.png';

export default class Mediumtwentynine extends Component {
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
                  <h2>29</h2>
                </div>
                <div>
                  <img src={Lo29} />
                </div>
                <div >
                  <p>EDA Contractors</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Bensalem, Pa.</p>
              </div>
              <div className="company-div__sector">
                <p>Roofing and Siding</p>
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
          <p>EDA specializes on the exterior envelope of all commercial, institutional and industrial buildings. Its exterior envelope includes wall panels and accessories; roofing; waterproofing; air and vapor barriers; masonry and vegetative roof systems.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg29} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Bensalem, Pa.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1999</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Roofing and Siding</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>197</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.edacontractor.com/">http://www.edacontractor.com/</a></p>                        
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
