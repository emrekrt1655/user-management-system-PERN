import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import store from "./store";

const AlertTemplate = ({ style, options, message }) => (
  <div style={style}>
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
    {message}
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
