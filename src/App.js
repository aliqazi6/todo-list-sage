import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import  Add  from './features/todoApplication/Add';
import Edit from "./features/todoApplication/Edit";
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Add />} />
      {/* <Route exact path="/add" element={<Add />} /> */}
      <Route exact path="/edit/:id" element={<Edit />} />
    </Routes>
  </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Add/>
    //     <span>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
