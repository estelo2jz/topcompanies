import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Small from './components/Small/smalltwo';
import CompanyNav from './components/CompanyNav';
import SmallCon from './components/Small/SmallCon';

import SmallTest from './components/Small/small';

import MediumCon from './components/Medium/mdiumcon';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Switch>
        <Route path="/smallcon" component={SmallCon} />
          <Route path="/small" component={SmallTest} />
          <Route path="/medium" component={MediumCon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
