import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatContent from "../../Component/chatContent";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";
import { fetchUserDatas } from "../../reducer/user";
const Home = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state)=>state.data);
  // useEffect(()=>{
  //   dispatch(fetchUserDatas())
  // },[dispatch])
  // console.log("state",state)
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatLeft title="Home" />
      <ChatContent />
    </div>
  );
};

export default Home;
