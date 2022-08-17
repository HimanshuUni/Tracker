import { Button, Input, Modal } from "antd";
import React, { useMemo, useState } from "react";
import { useUIContext } from "../../_context/UIContext";
const { TextArea } = Input;
const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const UIContext = useUIContext();

  const UIProps = useMemo(() => {
    return {
      openTaskSaveModal: UIContext.openTaskSaveModal,
      setOpenTaskSaveModal: UIContext.setOpenTaskSaveModal,
      handleSaveTask: UIContext.handleSaveTask,
      uniqueId: UIContext.uniqueId,
    };
  }, [UIContext]);

  const handleReset = () => {
    setTaskTitle("");
    setTaskDescription("");
  };
  const handleOk = () => {
    UIProps.handleSaveTask({ title: taskTitle, description: taskDescription });
    UIProps.setOpenTaskSaveModal(false);
    handleReset();
  };

  const handleCancel = () => {
    UIProps.setOpenTaskSaveModal(false);
  };

  return (
    <Modal
      title="Add Task"
      visible={UIProps.openTaskSaveModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        placeholder="input with clear icon"
        allowClear
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <br />
      <br />
      <TextArea
        placeholder="textarea with clear icon"
        allowClear
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
    </Modal>
  );
};

export default CreateTask;
