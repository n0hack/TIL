require("dotenv").config();
const path = require("path");
const express = require("express");
const { SolapiMessageService } = require("solapi");
const messageService = new SolapiMessageService(
  process.env.API_KEY,
  process.env.API_SECRET
);

const app = express();
const phoneNumber = process.env.PHONE_NUMBER;

app.get("/", (_, res) => {
  res.send("SOLAPI 문자 테스트 웹서버");
});

app.get("/send/:to", (req, res) => {
  messageService.send({
    to: req.params.to,
    from: phoneNumber,
    text: "솔라피 국내 문자(SMS) 테스트",
  });
  res.send("메시지 전송 완료");
});

app.get("/send/us/:to", (req, res) => {
  messageService.send({
    to: req.params.to,
    from: phoneNumber,
    text: "솔라피 미국 문자(SMS) 테스트",
    // 한국 국가번호, 국가번호 뒤에 추가로 번호가 붙는 국가들은 붙여서 기입 (ex. 1 441 -> "1441")
    country: "1",
  });
  res.send("메시지 전송 완료");
});

app.get("/send/us/:to", (req, res) => {
  messageService.send({
    to: req.params.to,
    from: phoneNumber,
    text: "솔라피 미국 문자(SMS) 테스트",
    // 한국 국가번호, 국가번호 뒤에 추가로 번호가 붙는 국가들은 붙여서 기입 (ex. 1 441 -> "1441")
    country: "1",
  });
  res.send("메시지 전송 완료");
});

app.get("/send/uk/:to", (req, res) => {
  messageService.send({
    to: req.params.to,
    from: phoneNumber,
    text: "솔라피 영국 문자(SMS) 테스트",
    // 한국 국가번호, 국가번호 뒤에 추가로 번호가 붙는 국가들은 붙여서 기입 (ex. 1 441 -> "1441")
    country: "44",
  });
  res.send("메시지 전송 완료");
});

app.get("/send/jp/:to", (req, res) => {
  messageService.send({
    to: req.params.to,
    from: phoneNumber,
    text: "솔라피 일본 문자(SMS) 테스트",
    // 한국 국가번호, 국가번호 뒤에 추가로 번호가 붙는 국가들은 붙여서 기입 (ex. 1 441 -> "1441")
    country: "81",
  });
  res.send("메시지 전송 완료");
});

app.get("/send/mms/:to", async (req, res) => {
  // 당근 사진 보내기 (MMS)
  // MMS 용 이미지 업로드에는 200kb 이내의 jpg 파일만 업로드 가능
  const imageId = await messageService
    .uploadFile(path.resolve(__dirname, "./images/hello.JPG"), "MMS")
    .then((res) => res.fileId);

  messageService.send({
    imageId,
    to: req.params.to,
    from: phoneNumber,
    text: "솔라피 멀티미디어 문자(MMS) 테스트",
  });
  res.send("메시지 전송 완료");
});

app.get("*", (_, res) => {
  res.redirect("/");
});

app.listen(52273, () => {
  console.log("solapi test server running at http://localhost:52273/");
});
