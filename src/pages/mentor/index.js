import React from "react";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";

const Mentor = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatLeft title="Mentor" />
    </div>
  );
};

export default Mentor;
