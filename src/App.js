import React from "react";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import "./App.css";
import Users from "./Users/Users";
import Search from './Users/Search'
class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    console.log("Working")//to check component did mount working
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Search></Search>
        <Users loading={this.state.loading} users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
