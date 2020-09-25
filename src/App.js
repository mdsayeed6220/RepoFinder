import React from "react";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import "./App.css";
import Users from "./Components/Users/Users";
import Search from "./Components/Users/Search";
import Alert from "./Components/Layout/Alert";
class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  render() {
    return (
      <div className="App">
        
        <Navbar></Navbar>
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        ></Search>
        <Users loading={this.state.loading} users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
