import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo10 from '../../images/med/lo10.png';
import Bg10 from '../../images/med/bg10.png';

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
              <div className="company-div__number">
                <h2>10</h2>
              </div>
              <div className="company-div__logo">
                <img src={Lo10} />
              </div>
              <div  className="company-div__name">
                <p>Ytel</p>
              </div>
              <div className="company-div__location">
                <p>Foothill Ranch, Calif.</p>
              </div>
              <div className="company-div__sector">
                <p>Telecommunications and Cable</p>
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
          <p>Ytel powers communications for businesses to build deeper relationships through human interaction. It offers a communications API that enables voice, messaging and mail that integrate with existing applications, along with a contact center application built for lead generation and sales acceleration.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg10} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>Foothill Ranch, Calif.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2012</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Telecommunications and Cable</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>85</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://ytel.com/">https://ytel.com/</a></p>                        
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
