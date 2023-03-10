import React from "react";
import { Typography } from "antd";

const { Text } = Typography;
//className= {text === "Progress" ? "blinkingtext" : text === "Start"? "normaltext":text === "Start"? "donetext"}
const BlinkingNum = ({ num,num2 }) => {
  //return <Text className={num === "0" ? "" : "blinkingtext"}>{num}</Text>;
  return (
    <Text className={num === num2 ? "" : num === "0" ? "" : "blinkingtext"}>
      {num}
    </Text>
  );
};

export default BlinkingNum;
