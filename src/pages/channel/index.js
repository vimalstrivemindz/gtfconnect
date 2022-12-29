import React from "react";
import ChatContent from "../../Component/chatContent";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";

const Channel = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatLeft title="Channel" />
      <ChatContent />
    </div>
  );
};

export default Channel;
