import React from 'react'
import {
    BrowserRouter as Router,
    Route, Switch
  } from "react-router-dom";
import { routes } from '../Shared/routes';
import Amount from './Amount';
import Company from './Company';
import Done from './Done';
import Form from './Form';

const Recharge = function Recharge() {
    return (
        <div className="row justify-content-center h-100">
          <Route exact path={routes.rechargeFirst}>
            <Company/>
          </Route>
          <Route exact path={routes.rechargeSecond}>
            <Amount/>
          </Route>
          <Route exact path={routes.rechargeThird}>
            <Form/>
          </Route>
          <Route exact path={routes.rechargeLast}>
            <Done/>
          </Route>
        </div>
    )
}

export default Recharge
