import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ProductionList from "../pages/ProductionList";

const Page = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productions" component={ProductionList} />
      </Switch>
    </div>
  );
};

export default Page;
