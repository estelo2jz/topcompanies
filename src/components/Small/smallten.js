import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo10 from '../../images/logo10.png';
import Bg10 from '../../images/bg/bg10.png';

export default class Smallten extends Component {
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
                <div >
                  <h2>10</h2>
                </div>
                <div >
                  <img src={Logo10} />
                </div>
                <div  >
                  <p>Serur Agencies</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Wilmington, Mass.</p>
              </div>
              <div className="company-div__sector">
                <p>Mobile Marketing Technology</p>
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
          <p>Serur Agencies is one of the fastest growing subsidiaries for the American income branch of Torchmark Corporation. Serur Agencies handles supplemental benefits to individuals and organizations globally.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg10} />
          </div>
          <div>

          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Wilmington, Mass.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Mobile Marketing Technology</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>66</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.SerurAgencies.com">http://www.SerurAgencies.com</a></p>                        
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
