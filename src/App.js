import React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Friends from "./Components/Friends/Friends";
import Settings from "./Components/Settings/Settings";
import Information from "./Components/Information/Information";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Friends" component={Friends} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Information" component={Information} />
        </Switch>
      </Routes>
    </div>
  );
};

export default App;
