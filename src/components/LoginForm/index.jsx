import React, { Component } from "react";

const INITIAL_VALUES = { email: "", password: "" };
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUES.email,
      password: INITIAL_VALUES.password,
    };
  }

  handlerEmailChange = ({ target: { value } }) => {
    this.setState({ email: value });
  };
  handlerPasswordChange = ({ target: { value } }) => {
    this.setState({ password: value });
  };
  handlerSubmit = (e) => {
    e.preventDefault();
    this.setState(INITIAL_VALUES);
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <div>LoginForm</div>
        <form onSubmit={this.handlerSubmit}>
          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="YourEmail"
              name="email"
              value={email}
              onChange={this.handlerEmailChange}
              autoFocus
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handlerPasswordChange}
              autoFocus
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
