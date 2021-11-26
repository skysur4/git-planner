/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/git-planner.css";

import PlannerLayout from "layouts/Planner.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={process.env.REACT_APP_WEB_ROOT} render={(props) => <PlannerLayout {...props} />} />
      <Redirect from="/" to={process.env.REACT_APP_WEB_ROOT} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
