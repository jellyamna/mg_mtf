import React from "react";
import { Typography } from "antd";


const { Text } = Typography;
//className= {text === "Progress" ? "blinkingtext" : text === "Start"? "normaltext":text === "Start"? "donetext"}
const Blinking = ({ text }) => {
  return (
    <Text className={text === "Progress" ? "blinkingtext" : text === "Start"? "normaltext" :text === "Done" ? "donetext": ""} >
      {text}
    </Text>
  );
};

export default Blinking;
