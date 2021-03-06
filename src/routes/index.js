import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Registration from "../pages/Registration";
import Survey from "../pages/Survey";
import SurveySuccess from "../pages/Survey/Success/SurveySuccess";
import Results from "../pages/Results";

import { PrivateRoute } from "../components";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (
          <Redirect to="/survey"/>
        )}/>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route  path="/registration" component={Registration} />
        <PrivateRoute path="/survey" exact component={Survey} />
        <PrivateRoute path="/survey/success" component={SurveySuccess} />
        <PrivateRoute path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
