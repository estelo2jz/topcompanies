import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo14 from '../../images/logo14.png';
import Bg14 from '../../images/bg/bg14.png';

export default class Smallfourteen extends Component {
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
                  <h2>14</h2>
                </div>
                <div>
                  <img src={Logo14} />
                </div>
                <div >
                  <p>Qualbe Marketing Group</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Haltom City, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Digital Marketing</p>
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
          <p>Qualbe is a digital marketing company. Unlike a traditional agency, it invests its own marketing dollars to acquire online traffic, and its sales team converts them into customers. It removes the risk for its partners, so they can focus on delivering fantastic products and services. Qualbe's sweet spot is teaming up with subscription businesses.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg14} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Haltom City, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1997</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Digital Marketing</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>60</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://qualbe.com">https://qualbe.com</a></p>                        
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
