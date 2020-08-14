import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo24 from '../../images/med/lo24.png';
import Bg24 from '../../images/med/bg24.jpg';

export default class Mediumtwentyfour extends Component {
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
                  <h2>24</h2>
                </div>
                <div>
                  <img src={Lo24} />
                </div>
                <div >
                  <p>VICIS</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Seattle, Wash.</p>
              </div>
              <div className="company-div__sector">
                <p>Sports Technology</p>
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
          <p>VICIS is a Seattle-based sports technology company. Its inaugural product, the ZERO1 football helmet, launched in 2017 and was worn by players on 18 NFL teams.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg24} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Seattle, Wash.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Sports Technology</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>89</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://vicis.com/">https://vicis.com/</a></p>                        
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
