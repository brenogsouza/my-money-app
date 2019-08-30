import React from "react";

import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

// CUSTOM COMPONENTS
import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

const Routes = props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
export default Routes;
