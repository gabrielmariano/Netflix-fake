import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import history from "./services/history";

import Main from "./pages/Main";
import About from "./pages/About";
import Series from "./pages/Series"

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router>
    <GlobalStyle />
      <Router history={history}>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About}/>
          <Route path="/Series" component={Series}/>
      </Router>
    </Router>
  )
}

export default App;
