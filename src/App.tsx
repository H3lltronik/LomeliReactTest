import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Categories from './app/Categories/Categories';
import Home from './app/Home/Home';
import Recharge from './app/Recharge/Recharge';

function App() {
  return (
    <div className={"row"}>
      <Router>
        <Switch>
          <Route exact path="/categories">
            <Categories/>
          </Route>
          <Route exact path="/topUp">
            <Recharge/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App; 
