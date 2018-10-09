import React from "react";

import Form from "../../organisms/Form/Form.js";
import NavLinks from "./../../molecules/NavLinks/NavLinks.js";

const AddNew = ({addTasks}) => (
  <div>
  <NavLinks />
    <Form addTasks={addTasks} />
  </div>
);

export default AddNew;
