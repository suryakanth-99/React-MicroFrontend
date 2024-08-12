import { lazy } from "react";
import React from "react";

const Header = lazy(() => import("./Header"));
const Dashboard = lazy(() => import("./Dashboard"));

const Main = () => {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default Main;
