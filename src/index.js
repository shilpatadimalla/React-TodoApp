import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";
import "./styles.css";

const Data = [
  { id: "todo-0", name: "Math", completed: true },
  { id: "todo-1", name: "English", completed: false },
  { id: "todo-2", name: "Science", completed: false }
];

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <App data={Data} />
  </StrictMode>,
  rootElement
);
