import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home";
import DatePicker from "../../pages/date-picker";
import Milestones from "../../pages/milestones";

const App = () => (
  <Router>
    <Switch>
      <Route path="/date-picker">
        <DatePicker />
      </Route>
      <Route path="/milestones">
        <Milestones />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
