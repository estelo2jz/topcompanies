import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo28 from '../../images/logo28.png';
import Bg28 from '../../images/bg/bg28.png';

export default class Smalltwentyeight extends Component {
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
                <h2>28</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo28} />
              </div>
              <div  className="company-div__name">
                <p>Synergist Computing</p>
              </div>
              <div className="company-div__location">
                <p>Annapolis Junction, Md.</p>
              </div>
              <div className="company-div__sector">
                <p>Custom Software Development and Consulting</p>
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
          <p>Synergist Computing is a software firm that focuses on resolving difficult technical challenges. Synergist Computing's approach is to think “outside the box” to create unconventional yet imaginative solutions that afford our customers a greater opportunity for efficiency and success.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg28} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Annapolis Junction, Md.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2012</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Custom Software Development and Consulting</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>36</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="http://www.synergistcomputing.com">http://www.synergistcomputing.com</a></p>                        
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
