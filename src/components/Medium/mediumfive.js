import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo5 from '../../images/med/lo5.png';
import Bg5 from '../../images/med/bg5.png';

export default class Mediumten extends Component {
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
                  <h2>5</h2>
                </div>
                <div>
                  <img src={Lo5} />
                </div>
                <div >
                  <p>N2 Publishing</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Wilmington, N.C.</p>
              </div>
              <div className="company-div__sector">
                <p>Neighborhood Publications</p>
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
          <p>N2 Publishing produces neighborhood publications that create a sense of community and support local businesses.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg5} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Denver, Colo.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2004</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Neighborhood Publications</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>230</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://n2pub.com/">https://n2pub.com/</a></p>                        
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
