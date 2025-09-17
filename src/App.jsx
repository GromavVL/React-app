import UsersList from "./components/UsersList";
import ThemeButton from "./components/ThemeButton/index";
import React, { Component } from "react";
import LoginForm from "./components/LoginForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      islight: true,
    };
  }
  changeTheme = () => {
    const { islight } = this.state;
    this.setState({ islight: !islight });
  };
  render() {
    const { islight } = this.state;
    return (
      <>
        <UsersList islight={islight} chageTheme={this.changeTheme} />
        <ThemeButton islight={islight} changeTheme={this.changeTheme} />
        <LoginForm/>
      </>
    );
  }
}

export default App;
