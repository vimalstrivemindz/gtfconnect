import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoutes = (props) => {
  const { Cmp } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("token");
    if (!login) {
      navigate("/login");
    }
  }, [props]);
  return <Cmp />;
};

export default ProtectRoutes;
