import React from "react";
import ChatContent from "../../Component/chatContent";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";

const LogOut = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatLeft title="Logout" />
      <ChatContent />
    </div>
  );
};

export default LogOut;
