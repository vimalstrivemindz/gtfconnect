import React from "react";
import ChatContent from "../../Component/chatContent";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";

const Message = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatLeft
        title="Saved Messages"/>
        <ChatContent />
    </div>
  );
};

export default Message;
