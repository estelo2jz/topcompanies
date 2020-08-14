import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo22 from '../../images/logo22.png';
import Bg22 from '../../images/bg/bg22.png';

export default class Smalltwentytwo extends Component {
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
                  <h2>22</h2>
                </div>
                <div>
                  <img src={Logo22} />
                </div>
                <div >
                  <p>Bateman Group</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>San Francisco, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Technology PR</p>
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
          <p>Bateman Group is a content-led PR agency focused on helping technology companies at every stage make a positive impact on the way we live and work.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg22} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> San Francisco, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2003</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Technology PR</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>65</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.bateman-group.com">https://www.bateman-group.com</a></p>                        
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
