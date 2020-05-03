import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/detailpage";

import Home from "./components/home";
import Details from "./components/detailpage";

import Form from "./components/bookingform";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book" component={Form} />
            <Route path="/:car_detail" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
