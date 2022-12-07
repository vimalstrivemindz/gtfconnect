import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Mentor from "./pages/mentor";
import ChatContent from "./Component/chatContent";
import Group from "./pages/group";
import Channel from "./pages/channel";
import Setting from "./pages/setting";
import Message from "./pages/message";
import LogOut from "./pages/logout";
import Test from "./Test";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="d-flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/group" element={<Group />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/message" element={<Message />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/test" element={<Test />} />
          </Routes>
          <ChatContent />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
