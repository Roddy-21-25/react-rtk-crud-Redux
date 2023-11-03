import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <TaskForm />
      <TaskList />
    </Provider>
  </React.StrictMode>
);
