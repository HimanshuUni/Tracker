import { Button, Input, Modal } from "antd";
import React, { useMemo, useState } from "react";
import { useUIContext } from "../../_context/UIContext";
const { TextArea } = Input;
const EditTask = ({ item, setOpenModal, openModal }) => {
  const [taskDescription, setTaskDescription] = useState(item.description);
  const UIContext = useUIContext();

  const UIProps = useMemo(() => {
    return {
      handleEditTask: UIContext.handleEditTask,
    };
  }, [UIContext]);

  const handleOk = () => {
    UIProps.handleEditTask(item.id, taskDescription);
    setOpenModal(false);
  };

  const handleCancel = () => {
    setTaskDescription(item.description);
    setOpenModal(false);
  };

  return (
    <Modal
      title={
        <p>
          Edit Task Description: <span className="bold">{item.title}</span>
        </p>
      }
      visible={openModal}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose
    >
      <TextArea
        placeholder="textarea with clear icon"
        allowClear
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
    </Modal>
  );
};

export default EditTask;
