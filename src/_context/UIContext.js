import React, { createContext, useContext, useEffect, useState } from "react";
const UIContext = createContext();

export function useUIContext() {
  return useContext(UIContext);
}

export function UIProvider({ children }) {
  const [openTaskSaveModal, setOpenTaskSaveModal] = useState(false);
  const [openTaskEditModal, setOpenTaskEditModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const timeFormate = () => {
    const result = new Date(time).toISOString().slice(11, 19);
    return result;
  };
  const uniqueId = function () {
    return Date.now();
  };
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleSaveTask = (data) => {
    data.timer = timeFormate();
    data.id = uniqueId();
    setTaskList((prev) => [...prev, data]);
    handleReset();
  };
  const handleEditTask = (id, description) => {
    setTaskList((prev) =>
      prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, description };
        }
        return obj;
      })
    );
    handleReset();
  };
  const handleSaveTimer = () => {
    handlePause();
    setOpenTaskSaveModal(true);
  };

  const value = {
    setOpenTaskSaveModal,
    openTaskSaveModal,
    setOpenTaskEditModal,
    openTaskEditModal,
    handleSaveTask,
    handleEditTask,
    handleStart,
    handlePause,
    handleSaveTimer,
    timeFormate,
    taskList,
    isActive,
    isPaused,
    time,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
