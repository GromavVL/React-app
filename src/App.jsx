import StopWatch from "./components/StopWatch";
import AnimalSlider from './components/AnimalSlider/index'
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
    return (
      <>
        <AnimalSlider />
      </>
    );
  }
}

export default App;
