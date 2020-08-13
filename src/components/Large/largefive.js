import React, { Component } from 'react';
import '../../styles/company.scss';

import Lo5 from '../../images/lar/lo5.png';
import Bg5 from '../../images/lar/bg5.png';

export default class Largefive extends Component {
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
                <img src={Lo5} />
              </div>
              <div  className="company-div__name">
                <p>Curriculum Associates</p>
              </div>
              <div className="company-div__location">
                <p>North Billerica, Mass.</p>
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
          <p>Curriculum Associates focuses on a blended learning approach, evolving along with schools as they focus more on digital content. It designs print and online instructional materials, screens and assessments, along with data management tools to address the needs of today's student and help teachers save time in the classroom.</p>
        </div>
        <div className="bio-flex-container">
          <div className="bio-left-container">
            <img className="" src={Bg5} />
          </div>
          <div className="bio-right-container">
            <div className="bio-single">
              <p>Location</p>
              <p>North Billerica, Mass.</p>
            </div>
            <div className="bio-single">
              <p>Year Founded</p>
              <p>1969</p>
            </div>
            <div className="bio-single">
              <p>Sector</p>
              <p>Publishing</p>
            </div>
            <div className="bio-single">
              <p># of U.S. Employees</p>
              <p>808</p>
            </div>
            <div className="bio-single">
              <p>Website</p>
              <p><a href="https://www.curriculumassociates.com/">https://www.curriculumassociates.com/</a></p>                        
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
