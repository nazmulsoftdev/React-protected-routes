import React, { createContext, useState } from "react";

const ContextAPI = createContext();

export const ContextProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);

  const userAuth = () => {
    setisLogin(!isLogin);
  };

  return (
    <ContextAPI.Provider value={{ isLogin: isLogin, userAuth }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextAPI;
