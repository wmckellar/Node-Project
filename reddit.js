const fs = require("fs");
const path = require("path");
const request = require("request");
let pear = [];
let dataPath = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) throw err;
  JSON.parse(body).data.children.forEach(line => {
    pear.push({
      author: line.data.author,
      url: line.data.url,
      title: line.data.title});
    
    console.log(pear);});
  fs.writeFile(dataPath, JSON.stringify(pear), err => {
    if (err) throw err;
    console.log("Got it!");});
});
