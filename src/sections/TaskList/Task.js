import { Button, List } from "antd";
import React, { useState } from "react";
import { EditTaskModal } from "../../components";

const Task = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <List.Item
        actions={[
          <Button onClick={() => setOpenModal(true)} key="edit">
            Edit
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
