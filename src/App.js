import React from "react";
import Navbar from "./Components/Layout/Navbar";
import axios from "axios";
import "./App.css";
import Users from "./Users/Users";
class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Users loading={this.state.loading} users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
