import React, { Component } from "react";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 3,
    };
  }
  loadUsers = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });
    fetch(`https://randomuser.me/api?results=5&seed=pe2024&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results, isFetching: false }))
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };
  componentDidMount() {
    this.loadUsers();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.loadUsers();
    }
  }
  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };
  previousPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };
  render() {
    const { users, isFetching, error } = this.state;
    return (
      <>
        <button onClick={this.previousPage}>{"<"}</button>
        <button onClick={this.nextPage}>{">"}</button>
        {error && <div>!!!ERROR!!!</div>}
        {isFetching && <div>Loading. Please waite...</div>}
        {!error && !isFetching && (
          <ul>
            {users.map((u) => (
              <li key={u.id}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default UsersLoader;
