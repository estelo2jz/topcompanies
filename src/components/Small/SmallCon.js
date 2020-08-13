import React, { Component } from 'react';
import Smallone from './smallone';
import Smalltwo from './smalltwo';
import Smallthree from './smallthree';
import Smallfour from './smallfour';
import Smallfive from './smallfive';
import Smallsix from './smallsix';
import Smallseven from './smallseven';
import Smalleight from './smalleight';
import Smallnine from './smallnine';
import Smallten from './smallten';
import Smalleleven from './smalleleven';
import Smalltwelve from './smalltwelve';
import Smallthirteen from './smallthirteen';
import Smallfourteen from './smallfourteen';
import Smallfifteen from './smallfifteen';

import CompanyNav from '../CompanyNav';

export default class SmallCon extends Component {
  render() {
    return (
      <div className="con-container">
       <div>
         <CompanyNav />
       </div>

        <div>
          <Smallone />
          <Smalltwo />
          <Smallthree />
          <Smallfour />
          <Smallfive />
          <Smallsix />
          <Smallseven/>
          <Smalleight />
          <Smallnine />

          <Smallten />
          <Smalleleven />
          <Smalltwelve />
          <Smallthirteen />
          <Smallfourteen />
          <Smallfifteen />
        </div>
      </div>
    )
  }
}
