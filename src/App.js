import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import History from "./History"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
