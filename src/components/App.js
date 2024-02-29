import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Services from "./Services";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/pastprojects" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
