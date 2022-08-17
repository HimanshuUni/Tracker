import { Button, List } from "antd";
import React, { useMemo, useState } from "react";
import { EditTaskModal } from "../../components";
import { useUIContext } from "../../_context/UIContext";

const Task = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      handleDeleteTask: UIContext.handleDeleteTask,
    };
  }, [UIContext]);

  return (
    <>
      <List.Item
        actions={[
          <Button onClick={() => setOpenModal(true)} key="edit">
            Edit
          </Button>,
          <Button onClick={() => UIProps.handleDeleteTask(item.id)} key="edit">
            Delete
          </Button>,
        ]}
      >
        <List.Item.Meta
          title={<p>Title: {item.title}</p>}
          description={
            <div>
              <p>
                Description: <span className="bold">{item.description}</span>
              </p>
              <p>
                Tracked Time: <span className="bold">{item.timer}</span>
              </p>
            </div>
          }
        />
      </List.Item>
      <EditTaskModal
        item={item}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Task;
