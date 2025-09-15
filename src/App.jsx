// import StopWatch from "./components/StopWatch";
import React, { Component } from "react";
import VeiwPortParams from './components/VeiwPortParams/index'

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
        <button onClick={this.handlerClick}>
          {isVisible ? "Unmount" : "Mount"}
        </button>
        {isVisible && <VeiwPortParams />}
      </>
    );
  }
}

export default App;
