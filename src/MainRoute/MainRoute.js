import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import RouteComponent from "./RouteComponent";

const DynamicAddNew = RouteComponent( () => import("./../components/templates/AddNew/AddNew"));
const DynamicCompleted = RouteComponent( () => import("./../components/templates/Completed/Completed"));
const DynamicAllTasks = RouteComponent( () => import("./../components/templates/AllTasks/AllTasks"));
const DynamicPending = RouteComponent( () => import("./../components/templates/Pending/Pending"));


const MainRoute = props => (
	<div className="toDoApp">
  <Router>
    <Switch>
      <Route exact={true} path="/" render={() => <DynamicAllTasks {...Object.assign({}, props)} />} />
      <Route path="/addNew" render={() => <DynamicAddNew {...Object.assign({}, props)} />} />
      <Route path="/completed" render={() => <DynamicCompleted {...Object.assign({}, props)} />} />
      <Route path="/pending" render={() => <DynamicPending {...Object.assign({}, props)} />} />
	</Switch>
  </Router>
  </div>
);

export default MainRoute;
