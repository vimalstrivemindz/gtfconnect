import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatLeft from "../../Component/chatLeft";
import Sidebar from "../../Component/sidebar";
import { fetchUserDatas } from "../../reducer/user";
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state?.user);
  useEffect(()=>{
    dispatch(fetchUserDatas())
  },[dispatch])
  console.log(state)
  return (
    <>
      <Sidebar />
      <ChatLeft title="Home" />
    </>
  );
};

export default Home;
