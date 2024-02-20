import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TicToe from "./components/TicToeGame/TicToe";
import Pagination from "./components/Pagination/Pagination";
import ToDoApp from "./components/ToDoApp/ToDoApp";
import Forms from "./components/StateLearning/Forms";
import QueuingState from "./components/StateLearning/QueuingState";
import UpdatingObjectsInState from "./components/StateLearning/UpdatingObjectsInState";
import CounterList from "./components/StateLearning/UpdatingArraysInState";
import Reverselist from "./components/StateLearning/UpdatingArraysInState";
import Stopwatch from "./components/UseRef/Stopwatch";
import MyApp from "./components/memo/memo";
import { Auth0Provider } from "@auth0/auth0-react";
import Authapp from "./components/Authentication/Authapp";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Authapp />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
