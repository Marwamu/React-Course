// import logo from "./logo.svg";

import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar> 
        <div
        <div className="content">
          <Switch>
            <Route path="/c">
              <Home />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
