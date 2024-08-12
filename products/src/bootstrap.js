import React from "react";
import ReactDOM from "react-dom/client";
import { createMemoryHistory } from "history";
import App from "./App";

const mount = (ele, flag) => {
  // const history = createMemoryHistory();
  const root = ReactDOM.createRoot(ele);
  return root.render(<App history={history} />);
};

if (process.env.NODE_ENV === "development") {
  const devele = document.getElementById("dash-root");
  if (devele) {
    mount(devele);
  }
}

// export const mount = (container) => {
//   const root = ReactDOM.createRoot(container);
//   root.render(<App />);
// };

export { mount };
