import React, { Component } from 'react';
import '../../styles/company.scss';

import Logo5 from '../../images/logo5.png';
import Bg5 from '../../images/bg/bg5.png';

export default class Smallfive extends Component {
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
                <h2>5</h2>
              </div>
              <div className="company-div__logo">
                <img src={Logo5} />
              </div>
              <div  className="company-div__name">
                <p>Vuesol Technologies</p>
              </div>
              <div className="company-div__location">
                <p>Alpharetta, Ga.</p>
              </div>
              <div className="company-div__sector">
                <p>IT Services Provider</p>
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
          <p>Vuesol Technologies is a global technology services and outsourcing provider that is committed to helping customers align technology innovation with business strategy. Vuesol has been offering Fortune 500 and mid-size clients achieve their business goals by providing a full spectrum of technology services and high quality IT talent globally.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg5} />
          </div>
            <div className="bio-right-container">
              <div className="bio-single">
                <p>Location</p>
                <p>Alpharetta, Ga.</p>
              </div>
              <div className="bio-single">
                <p>Year Founded</p>
                <p>2015</p>
              </div>
              <div className="bio-single">
                <p>Sector</p>
                <p>IT Services Provider</p>
              </div>
              <div className="bio-single">
                <p># of U.S. Employees</p>
                <p>43</p>
              </div>
              <div className="bio-single">
                <p>Website</p>
                <p><a href="	http://www.vuesol.com">	http://www.vuesol.com</a></p>                        
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
