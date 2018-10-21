import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import Home from "./Home"
import History from "./History"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <div>
            <NavLink to="/Home">Voici l'accueil</NavLink><br />
            <NavLink to="/History" activeStyle={{color: "red"}}>notre histoire</NavLink>
          </div>
          <div> 
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route path="/History" component={History} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
