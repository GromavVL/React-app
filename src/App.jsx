import StopWatch from "./components/StopWatch";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  handlerClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };
  render() {
    const { isVisible } = this.state;

    return (
      <>
        {isVisible && <StopWatch />}
        <button onClick={this.handlerClick}>
          {isVisible ? "Unmount" : "Mount"}
        </button>
      </>
    );
  }
}

export default App;
