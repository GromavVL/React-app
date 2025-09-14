import React, { Component } from "react";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { count: 0 };
  }
  pomponentDidMount() {}
  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={() => this.setState({count: count + 1})}>+</button>
      </>
    );
  }
}
