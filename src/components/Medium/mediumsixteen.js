import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo16 from '../../images/med/lo16.png';
import Bg16 from '../../images/med/bg16.jpg';

export default class Mediumsixteen extends Component {
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
                  <h2>16</h2>
                </div>
                <div>
                  <img src={Lo16} />
                </div>
                <div >
                  <p>Red Dot Storage</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Louisville, Colo.</p>
              </div>
              <div className="company-div__sector">
                <p>Real Estate Investment</p>
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
          <p>Red Dot Storage is a technology-based self storage company located out of Louisville, Colorado.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg16} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Louisville, Colo.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Real Estate Investment</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>97</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.reddotstorage.com/">https://www.reddotstorage.com/</a></p>                        
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
