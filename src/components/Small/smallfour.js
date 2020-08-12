import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo4 from '../../images/logo4.png';
import Bg4 from '../../images/bg/bg4.png';

export default class Smallfour extends Component {
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
                <img src={Logo4} />
              </div>
              <div  className="company-div__name">
                <p>Choozle</p>
              </div>
              <div className="company-div__location">
                <p>Denver, Colo.</p>
              </div>
              <div className="company-div__sector">
                <p>Advertising Technology and Software</p>
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
          <p>Choozle provides digital advertising software that leverages detailed consumer data to power programmatic advertising campaigns across display, video, mobile and other mediums - all from a single, intuitive interface.</p>
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
              <p>2012</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Advertising Technology and Softwarer</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>60</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	https://choozle.com">	https://choozle.com</a></p>                        
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
