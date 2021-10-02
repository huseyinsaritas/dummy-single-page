import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { MainNavbar } from "../components/Navbar/Navbar";
import { ROUTE_PATH } from "../enum/ROUTE_PATH";
import { ContactUs } from "../pages/ContactUs/ContactUs";
import { Home } from "../pages/Home/Home";

export const AppRouter = () => {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route path={ROUTE_PATH.HOME} exact component={Home} />
        <Route path={ROUTE_PATH.CONTACT} component={ContactUs} />
        {/* <Route path={ROUTE_PATH.LOGIN} component={Login} />*/}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};
