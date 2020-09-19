import React from 'react';
import Navbar from './Components/Layout/Navbar'
import UserItem from './Users/UserItem'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar  ></Navbar>
      <UserItem></UserItem>
    </div>
  );
}

export default App;
