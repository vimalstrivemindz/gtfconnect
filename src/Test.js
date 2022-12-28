import React, { useEffect } from "react";
import { EncryptStorage } from 'encrypt-storage';
const Test = () => {

  const encryptStorage = new EncryptStorage('secret-key-value');
  const Toastify = () => {
    encryptStorage.setItem("hello","hello")
  };
  
  useEffect(()=>{
    console.log(localStorage.getItem("hello"))
  })

  return (
    <>
      <p onClick={Toastify}>Test</p>
      
    </>
  );
};

export default Test;
