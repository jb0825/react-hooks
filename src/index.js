import React from "react";
import ReactDOM from "react-dom/client";
//import App from "useInput";
//import App from "useTabs";
//import App from "useTitle";
//import App from "useClick";
//import App from "useConfirm";
//import App from "usePreventLeave";
//import App from "useBeforeLeave";
//import App from "useFadeIn";
//import App from "useNetwork";
//import App from "useScroll";
//import App from "useFullScreen";
import App from "useNotification";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
