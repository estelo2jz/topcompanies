import React, { Component } from 'react';
import '../../styles/company.scss';

import Scribelogo from '../../images/scribelogo.png';
import Bgscribe from '../../images/scribe.png';

export default class Smallone extends Component {
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
                  <h2>1</h2>
                </div>
                <div>
                  <img src={Scribelogo} />
                </div>
                <div >
                  <p>Scribe Media</p>
                </div>
              </div>
              <div className="company-div__location">
                <p>Austin, Texas</p>
              </div>
              <div className="company-div__sector">
                <p>Publishing</p>
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
          <p>Scribe helps professionals share their knowledge by turning their ideas into professionally published books and speeches. Its clients include Fortune 500 CEOs and executives, doctors, lawyers, financial advisors, high level consultants and entrepreneurs.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bgscribe} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p> Austin, Texas</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>2014</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Publishing</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>35</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://scribemedia.com/">https://scribemedia.com/</a></p>                        
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
