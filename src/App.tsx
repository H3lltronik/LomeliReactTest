import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Categories from './app/Categories/Categories';
import Home from './app/Home/Home';
import Recharge from './app/Recharge/Recharge';
import Footer from './app/Shared/Footer';
import { routes } from './app/Shared/routes';

function App() {
  return (
    <div className={"row"}>
      <div className={"col-12"}>
          <div className="row base justify-content-center justify-content-center">
            <div className="col-12">
            <Router>
              <Switch>
                <Route exact path={routes.categories}>
                  <Categories/>
                  <Footer/>
                </Route>
                <Route path={routes.recharge}>
                  <Recharge/>
                  <Footer/>
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
