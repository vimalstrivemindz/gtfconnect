import React from "react";
import ChatContent from "../../Component/chatContent";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";

const Mentor = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatLeft title="Mentor" />
      <ChatContent />
    </div>
  );
};

export default Mentor;
