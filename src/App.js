import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Small from './components/Small/smalltwo';
import CompanyNav from './components/CompanyNav';
import SmallCon from './components/Small/SmallCon';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <Route path="/smallcon" component={SmallCon} />
          <Route path="/small" component={Small} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
