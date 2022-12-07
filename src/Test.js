import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

const Test = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
  );
};

export default Test;
