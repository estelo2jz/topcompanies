import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo25 from '../../images/lar/lo25.png';
import Bg25 from '../../images/lar/bg25.png';

export default class Largetwentyfive extends Component {
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
                <h2>25</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo25} />
              </div>
              <div  className="company-div__name">
                <p>AEIConsultants</p>
              </div>
              <div className="company-div__location">
                <p>Walnut Creek, Calif.</p>
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
          <p>AEI Consultants is an employee-owned international consulting firm that provides comprehensive services to commercial lenders, property owners, managers, tenants, and developers, industries, institutions, government agencies, and insurers, including many Fortune 500 companies. these services include environmental, property and facility assessments, zoning and energy consulting, site investigation and remediation, industrial hygiene, and construction risk management.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg25} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Walnut Creek, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2013</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Commercial Real Estate</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>382</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.cohesity.com/">https://www.cohesity.com/</a></p>                        
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
