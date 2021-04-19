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
import { routes } from './app/Shared/routes';

function App() {
  return (
    <div className={"row"}>
      <div className={"col-12"}>
          <div className="row home justify-content-center d-flex align-items-center justify-content-center">
            <div className="col-12 col-lg-8">
            <Router>
              <Switch>
                <Route exact path={routes.categories}>
                  <Categories/>
                </Route>
                <Route exact path={routes.rechargeFirst}>
                  <Recharge/>
                </Route>
                <Route exact path={routes.home}>
                  <Home/>
                </Route>
              </Switch>
            </Router>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App; 
