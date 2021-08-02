import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "bootstrap/scss/bootstrap.scss";

const Login = lazy(() => import("./containers/auth/Login/index.js"));
const SignUp = lazy(() => import("./containers/auth/SignUp/index.js"));
const Dashboard = lazy(() => import("./containers/app/Dashboard/index.js"));

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isLoggedIn ? (
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Redirect from="/" to="/login" />
        </Switch>
      )}
    </Suspense>
  );
};

export default App;
