import { List } from "antd";
import React, { useMemo } from "react";
import { useUIContext } from "../../_context/UIContext";
import Task from "./Task";
const TaskList = () => {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      taskList: UIContext.taskList,
    };
  }, [UIContext]);

  return (
    <div className="task_list">
      <List
        itemLayout="horizontal"
        dataSource={UIProps.taskList}
        renderItem={(item) => <Task item={item} />}
      />
    </div>
  );
};

export default TaskList;
