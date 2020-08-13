import React, { Component } from 'react';

import CompanyNav from '../CompanyNav';

import Largeone from './largeone';
import Largetwo from './largetwo';
import Largethree from './largethree';
import Largefour from './largefour';
import Largefive from './largefive';
import Largesix from './largesix';
import Largeseven from './largeseven';
import Largeeight from './largeeight';
import Largenine from './largenine';
import Largeten from './largeten';
// import Largeeleven from './largeeleven';
// import Largetwelve from './largeywelve';
// import Largethirteen from './largethirteen';
// import Largefourteen from './largefourteen';
// import Largefifteen from './largefifteen';
// import Largesixteen from './largesixteen';
// import Largeseventeen from './largeseventeen';
// import Largeeighteen from './largeeighteen';
// import Largenineteen from './largenineteen';
// import Largetwenty from './largetwenty';
// import Largetwentyone from './largetwentyone';
// import Largetwentytwo from './largetwentytwo';
// import Largetwentyfour from './largetwentyfour';
// import Largetwentythree from './largeywentythree';
// import Largetwentyfive from './largewentyfive';
// import Largetwentysix from './largewentysix';
// import Largetwentyseven from './largetwentyseven';
// import Largetwentyeight from './largetwentyeight';
// import Largetwentynine from './largetwentynine';

export default class LargeCon extends Component {
  render() {
    return (
      <div className="con-container">
        <div>
          <CompanyNav />
        </div>
        <div>
          <Largeone />
          <Largetwo />
          <Largethree />
          <Largefour />
          <Largefive />
          <Largesix />
          <Largeseven/>
          <Largeeight />
          <Largenine />
          <Largeten />
          {/* <Largeeleven />
          <Largetwelve />
          <Largethirteen />
          <Largefourteen />
          <Largefifteen />
          <Largesixteen />
          <Largeseventeen />
          <Largeeighteen />
          <Largenineteen />
          <Largetwenty />
          <Largetwentyone />
          <Largetwentytwo />
          <Largetwentythree />
          <Largetwentyfour />
          <Largetwentyfive />
          <Largetwentysix />
          <Largetwentyseven />
          <Largetwentyeight />
          <Largetwentynine /> */}

        </div>
      </div>
    )
  }
}
