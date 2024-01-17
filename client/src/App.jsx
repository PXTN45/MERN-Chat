import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContextProvider } from "./Context/UserContext";
import Routes from "./Routes";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </>
  );
}

export default App;
