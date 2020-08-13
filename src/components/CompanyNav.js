// import React from 'react'

// function CompanyNav() {
//   return (
//     <div className="company-nav">
//       <div className="company-flex">
//         <div className="">
//           <p>Company</p>
//         </div>
//         <div className="">
//           <p>Location</p>
//         </div>
//         <div className="">
//           <p>Sector</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CompanyNav


import React, { Component } from 'react';
import './../styles/company.scss';

export default class Smallone extends Component {

  render() {
    return (
      <div className="company-container">
        <div className="company-inner-container">
          <div>
            <div className="company-grid__company-background">
              <div  className="company-div name">
                <p>Company</p>
              </div>
              <div className="company-div name">
                <p>Location</p>
              </div>
              <div className="company-div name">
                <p>Sector</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
