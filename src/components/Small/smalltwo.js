import React, { Component } from 'react';
import '../../styles/company.scss';

import Huglogo from '../../images/huglogo.png';
import Hugbg from '../../images/hughes.jpg';

export default class Smalltwo extends Component {
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
                <h2>2</h2>
              </div>
              <div className="company-div__logo">
                <img src={Huglogo} />
              </div>
              <div  className="company-div__name">
                <p>Hughes Marino</p>
              </div>
              <div className="company-div__location">
                <p>San Diego, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Commercial Real Estate</p>
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
          <p>Hughes Marino is a real estate firm that exclusively represents tenants and buyers -- never landlords -- so it never has a conflict of interest. With offices across the nation, Hughes Marino has been helping companies lease, buy and build commercial space for over 25 years.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Hugbg} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>San Diego, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2011</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Commercial Real Estate</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>74</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://hughesmarino.com/">http://hughesmarino.com/</a></p>                        
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
