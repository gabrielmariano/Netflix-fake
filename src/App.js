import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import history from "./services/history";

import Main from "./pages/Main";
import About from "./pages/About";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router>
    <GlobalStyle />
      <Switch history={history}>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About}/>
      </Switch>
    </Router>
  )
}

export default App;
