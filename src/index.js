import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Paragrafo } from "./Paragrafo.jsx";
import Soma from "./Soma.jsx";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Paragrafo />
    <hr />
    <Soma />
  </StrictMode>
);
