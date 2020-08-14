import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo25 from '../../images/med/lo25.png';
import Bg25 from '../../images/med/bg25.png';

export default class Mediumtwentyfive extends Component {
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
                  <h2>25</h2>
                </div>
                <div>
                  <img src={Lo25} />
                </div>
                <div >
                  <p>Assessment Intervention Management</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>San Antonio, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Education</p>
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
          <p>Assessment Intervention Management is a consulting firm providing a one-stop shop for special education services to children and schools.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg25} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>San Antonio, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2011</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Education</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>89</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://aimllcconsulting.com">http://aimllcconsulting.com</a></p>                        
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
