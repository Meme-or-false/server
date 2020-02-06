"use strict";

const yandexRouter = require("express").Router();
const axios = require("axios").default;

yandexRouter.get("/", function (req, res, next) {
  const yandexBaseURL = `https://translate.yandex.net`;
  const yandexLang = `en-id`;
  const yandexKey = process.env.YANDEX_API_KEY;
  axios({
    method: "GET",
    url: `${yandexBaseURL}/api/v1.5/tr.json/translate`,
    params: {
      key: yandexKey,
      lang: yandexLang,
      text: `This is the first ever attempt to translate!`
    }
  })
    .then(({data}) => {
      // console.log(translation);
      res.status(200).json({ result: data.text[0] });
      // res.status(200).json({ translation: translation });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "INTERNAL SERVER ERROR!" });
    });
});

module.exports = yandexRouter;