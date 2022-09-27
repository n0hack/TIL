const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(52273, () => {
//   console.log("solapi test server running at http://127.0.0.1/52273");
// });

axios
  .post("http://api.solapi.com/messages/v4/send", {
    message: {
      to: "01021822220",
      from: "01021822220",
      text: "솔라피 테스트",
      type: "SMS",
    },
  })
  .then(console.log)
  .catch(console.error);
