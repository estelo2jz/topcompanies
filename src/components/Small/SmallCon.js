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

import CompanyNav from '../CompanyNav';

export default class SmallCon extends Component {
  render() {
    return (
      <div>
        <CompanyNav />

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
        </div>
      </div>
    )
  }
}
