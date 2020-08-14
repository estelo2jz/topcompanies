import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo24 from '../../images/logo24.png';
import Bg24 from '../../images/bg/bg24.png';

export default class Smalltwentfour extends Component {
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
                  <img src={Logo24} />
                </div>
                <div >
                  <p>BuildFax</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Austin, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Data and insights</p>
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
          <p>BuildFax is an automated source for property condition data, providing intelligence for the insurance industry, analysts, inspectors and more. With over 23 billion data points on residential and commercial structures and proprietary predictive analytics, its employees have learned a lot about how building permit data predicts loss and tells the story of property history, improvements, structural risks and changes over time.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg24} />
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
              <p>Data and insights</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>42</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.buildfax.com/">https://www.buildfax.com/</a></p>                        
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
