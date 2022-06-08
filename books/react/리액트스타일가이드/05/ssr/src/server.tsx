import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "./App";

const app = express();

app.use("/", express.static("public"));

app.get("/sample", (req, res) => {
  ReactDOMServer.renderToPipeableStream(<App />).pipe(res);
});

app.listen(52273, () => console.log("Start"));
