import { Typography } from "antd";
import React, { useMemo } from "react";
import { useUIContext } from "../_context/UIContext";

const { Title } = Typography;

const Timer = () => {
  const UIContext = useUIContext();

  const UIProps = useMemo(() => {
    return {
      time: UIContext.time,
      timeFormate: UIContext.timeFormate,
    };
  }, [UIContext]);

  return <Title level={5}>{UIProps.timeFormate()}</Title>;
};

export default Timer;
