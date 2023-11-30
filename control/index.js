const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = 8000;

const app = express();

// スクレイピング記述
const URL =
  "https://sakurazaka46.com/s/s46/search/artist?ima=0000&link=ROBO004";
const data = [];

axios(URL).then((response) => {
  const htmlParser = response.data;
  // console.log(htmlParser);

  const $ = cheerio.load(htmlParser);
  $(".box", htmlParser).each(function () {
    const member_kana = $(this).find(".kana").text();
    const member = $(this).find(".name").text();
    data.push({ member_kana, member });
    console.log(data);
  });
});

app.listen(PORT, console.log("server running"));
