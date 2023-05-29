import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { AppStore } from "./components/core/redux/reduxStore.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={AppStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
