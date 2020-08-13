import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo15 from '../../images/logo15.png';
import Bg15 from '../../images/bg/bg15.png';

export default class Smallfifteen extends Component {
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
                <h2>15</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo15} />
              </div>
              <div  className="company-div__name">
                <p>Higher Learning Technologies</p>
              </div>
              <div className="company-div__location">
                <p>Coralville, Iowa</p>
              </div>
              <div className="company-div__sector">
                <p>Edtech</p>
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
          <p>Higher Learning Technologies is the developer of a mobile learning platform for professionals. HLT uses this platform to turn textbooks into interactive, mobile learning applications and websites.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg15} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Coralville, Iowa</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2012</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Edtech</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>41</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="	http://htlcorp.com">	http://htlcorp.com</a></p>                        
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
