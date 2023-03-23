import "./App.css";
import React from "react";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Home from "./components/SHOP/Home";
import Modal from "./components/SHOP/Modal/Modal";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  console.log(window.location);
  //give

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
