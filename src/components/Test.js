import React, { Component } from "react";

class Test extends Component {
  state = {
    isActive: false
  };

  handleShow = () => {
    this.setState({
      isActive: true
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false
    });
  };

  render() {
    if (this.state.isActive) {
      return (
        ''
      );
    } else {
      return (
        <div>
          <button onClick={this.handleShow}>Show</button>
        </div>
      );
    }
  }
}

export default Test;