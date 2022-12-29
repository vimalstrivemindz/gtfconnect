import React from "react";
import ChatContent from "../../Component/chatContent";
import SettingChat from "../../Component/chatLeft/SettingChat";
import Sidebar from "../../Component/sidebar";
const Setting = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <SettingChat title="Settings" />
      <ChatContent />
    </div>
  );
};

export default Setting;
