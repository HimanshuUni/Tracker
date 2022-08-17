import { Button } from "antd";
import React, { useMemo } from "react";
import { useUIContext } from "../_context/UIContext";

const ActionButton = () => {
  const UIContext = useUIContext();

  const UIProps = useMemo(() => {
    return {
      handleStart: UIContext.handleStart,
      handlePause: UIContext.handlePause,
      handleTask: UIContext.handleTask,
      isActive: UIContext.isActive,
      isPaused: UIContext.isPaused,
      handleSaveTimer: UIContext.handleSaveTimer,
      time: UIContext.time,
    };
  }, [UIContext]);

  return (
    <div className="button-container">
      <Button
        disabled={UIProps.isActive && !UIProps.isPaused}
        onClick={UIProps.handleStart}
        type="primary"
      >
        Start
      </Button>
      <Button disabled={UIProps.isPaused} onClick={UIProps.handlePause}>
        Pause
      </Button>
      <Button disabled={UIProps.time===0} type="dashed" onClick={UIProps.handleSaveTimer}>
        Save
      </Button>
    </div>
  );
};

export default ActionButton;
