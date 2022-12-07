import React from "react";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";

const Message = () => {
  return (
    <>
      <Sidebar />
      <ChatLeft
        title="Saved Messages"/>
    </>
  );
};

export default Message;
