import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo13 from '../../images/med/lo13.png';
import Bg13 from '../../images/med/bg13.jpg';

export default class Mediumthirteen extends Component {
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
                  <h2>13</h2>
                </div>
                <div>
                  <img src={Lo13} />
                </div>
                <div >
                  <p>ReliaQuest</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Tampa, Fla.</p>
              </div>
              <div className="company-div__sector">
                <p>Cybersecurity</p>
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
          <p>ReliaQuest's IT security technology is delivered as a customized service, allowing enterprise security teams to stay agile without compromising quality.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg13} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Tampa, Fla.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2007</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Cybersecurity</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>210</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.reliaquest.com">http://www.reliaquest.com</a></p>                        
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
