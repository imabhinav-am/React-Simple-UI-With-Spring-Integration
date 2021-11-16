import React from "react";
import "./App.css";
import { GetUsers } from "./components/GetUsers";
import { Header } from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddUser } from "./components/AddUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/*<Route path="/GetUsers" />*/}
          <Route path="/" element={<GetUsers />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
