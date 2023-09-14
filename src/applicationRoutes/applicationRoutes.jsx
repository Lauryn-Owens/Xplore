import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "../pages/signup";
import HomePage from "../pages/homePage";
//import About from '../pages/about';
import DummySignIn from "../pages/dummySignUp";
import Signin from "../pages/signin";
import DashboardHome from "../pages/dashboardHome";
import DashboardFavorites from "../pages/dashboardFavorites";
import DashboardNotifications from "../pages/dashboardNotifications";
import DashboardSettings from "../pages/dashboardSettings";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/dashboardHome" element={<DashboardHome />} />
      <Route
        exact
        path="/dashboardFavorites"
        element={<DashboardFavorites />}
      />
      <Route
        exact
        path="/dashboardNotifications"
        element={<DashboardNotifications />}
      />
      <Route exact path="/dashboardSettings" element={<DashboardSettings />} />
      {/*<Route exact path="/about" element={<About />} />*/}
      <Route exact path="/dummySignUp" element={<DummySignIn />} />
      <Route exact path="signin" element={<Signin />} />
    </Routes>
  );
}
