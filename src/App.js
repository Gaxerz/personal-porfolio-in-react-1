import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Home from "./Components/Home";
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="app">
      <Router>
        <div className="app m-0 p-0" >
          <div className="navbar-component" >
            <Navbar />
            <Banner />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router >
    </div >
  );
}

export default App;
