import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo9 from '../../images/logo9.png';
import Bg9 from '../../images/bg/bg9.png';

export default class Smallnine extends Component {
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
                  <h2>9</h2>
                </div>
                <div>
                  <img src={Logo9} />
                </div>
                <div >
                  <p>Peerfit</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Orlando, Fla.</p>
              </div>
              <div className="company-div__sector">
                <p>Digital Health</p>
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
          <p>Peerfit connects employers and carriers with personalized fitness experiences. Through its digital platform, insurance carriers, brokers and employers can redefine their benefits programs by giving employees access to a network of fitness studios and gyms -- offering a variety of classes that cater to all levels of fitness -- using workplace wellness dollars.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg9} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Orlando, Fla.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2011</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Digital Health</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>47</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://peerfit.com">https://peerfit.com</a></p>                        
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
