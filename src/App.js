import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Summary from './components/Summary';

import SmallCon from './components/Small/SmallCon';
import MediumCon from './components/Medium/mediumcon';
import LargeCon from './components/Large/large';

import SmallTest from './components/Small/small';
import MediumTest from './components/Medium/medium';
import LargeTest from './components/Large/large';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Summary />
        <NavBar />
        <Switch>
          <Route path="/small" component={SmallTest} />
          <Route path="/medium" component={MediumTest} />
          <Route path="/large" component={LargeTest} />

          <Route path="/smallcon" component={SmallCon} />
          <Route path="/mediumcon" component={MediumCon} />
          <Route path="/largecon" component={LargeCon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
