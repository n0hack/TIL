import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import Module from "./module";
import TxtModule from "./module.txt";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");
//   const myAlert = require("./components/myAlert").default;

//   btn.innerHTML = "Click me";
//   btn.onclick = myAlert;

//   element.append(btn);
//   return element;
// }

// let element = component();
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept("./components/myAlert.js", () => {
//     console.log("모듈 리로딩");
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }
