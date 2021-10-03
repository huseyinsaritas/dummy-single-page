import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { ROUTE_PATH } from "../enum/ROUTE_PATH";
import { ContactUs } from "../pages/ContactUs/ContactUs";
import { Home } from "../pages/Home/Home";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTE_PATH.HOME} exact component={Home} />
        <Route path={ROUTE_PATH.CONTACT} component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
};
