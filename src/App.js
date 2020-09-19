import React  from 'react';
import Navbar from './Components/Layout/Navbar'

import './App.css';
import Users from './Users/Users'
function App() {
  return (
    <div className="App">
      <Navbar  ></Navbar>
      <Users></Users>
    </div>
  );
}

export default App;
