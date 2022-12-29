// import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Mentor from "./pages/mentor";
// import ChatContent from "./Component/chatContent";
import Group from "./pages/group";
import Channel from "./pages/channel";
import Setting from "./pages/setting";
import Message from "./pages/message";
import LogOut from "./pages/logout";
import Test from "./Test";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import OtpVerification from "./pages/Auth/OtpVerification";
import ProtectRoutes from "./pages/ProtectRoutes/ProtectRoutes";
import EmailVerification from "./pages/Auth/EmailVerification";
import { ToastContainer } from "react-toastify";
import EditProfile from "./pages/editProfile";
import ChangePassword from "./pages/changePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <div className="d-flex"> */}
        <Routes>
          <Route path="/" element={<ProtectRoutes Cmp={Home} />} />
          <Route path="/mentor" element={<ProtectRoutes Cmp={Mentor} />} />
          <Route path="/group" element={<ProtectRoutes Cmp={Group} />} />
          <Route path="/channel" element={<ProtectRoutes Cmp={Channel} />} />
          <Route path="/setting" element={<ProtectRoutes Cmp={Setting} />} />
          <Route path="/message" element={<ProtectRoutes Cmp={Message} />} />
          <Route path="/logout" element={<ProtectRoutes Cmp={LogOut} />} />
          <Route path="/edit-profile" element={<ProtectRoutes Cmp={EditProfile} />} />
          <Route path="/change-password" element={<ProtectRoutes Cmp={ChangePassword} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/emailverification" element={<EmailVerification />} />
          <Route path="/otpverification" element={<OtpVerification />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        {/* <ChatContent /> */}
        {/* </div> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
