import React from "react";
import { Typography } from "antd";

const { Text } = Typography;
//className= {text === "Progress" ? "blinkingtext" : text === "Start"? "normaltext":text === "Start"? "donetext"}
const BlinkingStatus = ({ text }) => {
  return (
    <Text
      className={
        text === "On Progress"
          ? "blinkingtextStatus"
          : text === "Not Started"
          ? "notstarted"
          : text === "Done"
          ? "donetext"
          : ""
      }
    >
      {text}
    </Text>
  );
};

export default BlinkingStatus;
