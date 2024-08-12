import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = (ele, flag) => {
  const root = ReactDOM.createRoot(ele);
  return root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const devele = document.getElementById("header-root");
  if (devele) {
    mount(devele);
  }
}

// export const mount = (container) => {
//   const root = ReactDOM.createRoot(container);
//   root.render(<App />);
// };

export { mount };
