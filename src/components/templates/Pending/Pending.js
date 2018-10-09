import React from "react";

import List from "../../organisms/List/List.js";
import NavLinks from "./../../molecules/NavLinks/NavLinks.js";
const Pending = ({tasks, removeTask}) => (
  <div>
  <NavLinks />
    <List tasks={tasks.filter(item=>!item.done)} removeTask={removeTask} />
  </div>
);

export default Pending;
