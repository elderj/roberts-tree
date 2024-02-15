import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/portfolio/kings-card-game" component={KingsGame} />
        <Route
          exact
          path="/portfolio/kings-card-game/terms"
          component={KingsGameTOS}
        />
        <Route
          exact
          path="/portfolio/kings-card-game/privacy"
          component={KingsGamePP}
        /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
