import React, { Component } from 'react';
import LargeCon from './largecon';

export default class Large extends Component {
  render() {
    return (
      <div className="test-container">
        <div className="test-sample">
          <LargeCon />
        </div>
      </div>
    )
  }
}
