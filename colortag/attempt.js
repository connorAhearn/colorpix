var unirest = require('unirest');

unirest.post("https://apicloud-colortag.p.rapidapi.com/tag-file.json")
.header("X-RapidAPI-Host", "apicloud-colortag.p.rapidapi.com")
.header("X-RapidAPI-Key", "a52acb73b3mshda5bbe325e34d93p1c91ecjsn9bd88193e705")
.header("Content-Type", "application/x-www-form-urlencoded")
.send("palette=simple")
.send("sort=relevance")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});