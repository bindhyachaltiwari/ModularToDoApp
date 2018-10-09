import React from "react";

import List from "../../organisms/List/List.js";
import NavLinks from "./../../molecules/NavLinks/NavLinks.js";
const AllTasks = ({tasks, removeTask}) => (
  <div>
  <NavLinks />
    <List tasks={tasks} removeTask={removeTask} />
  </div>
);

export default AllTasks;
