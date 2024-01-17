import React from "react";
import RegisterAndLoginForm from "./components/RegisterAndLoginForm";
import Chat from "./components/Chat";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

const Routes = () => {
  const { username } = useContext(UserContext);
  if (username) {
    return <Chat />;
  }
  return <RegisterAndLoginForm />;
};

export default Routes;
