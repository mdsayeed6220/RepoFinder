import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import Users from "./Components/Users/Users";
import Search from "./Components/Users/Search";
import User from "./Components/Users/User";
import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/about";
import contact from "./Components/Contact/contact";
import Jobs from "./Components/Jobs/Jobs";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
  };
  
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };
  render() {
    const { user } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <contact></contact>
          <div className="container">
            <Alert alert={this.state.alert}></Alert>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    ></Search>
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About}></Route>

              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={this.state.repos}
                    loading={this.state.loading}
                  ></User>
                )}
              ></Route>
              <Route exact path="/jobs" component={Jobs}></Route>
              <Route exact path="/contact" component={contact}></Route>
            </Switch>

            <Users
              loading={this.state.loading}
              users={this.state.users}
            ></Users>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
