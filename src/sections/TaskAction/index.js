import React from "react";
import { ActionButton, Timer } from "../../components";
// import Timer from "../components/Timer";
function TaskAction() {
  return (
    <div className="task_action">
      <Timer />
      <ActionButton />
    </div>
  );
}

export default TaskAction;
