const path = require("path");
const fs = require("fs");
let dataPath = (path.join(__dirname, '../newThings.json'))

let newLines = [
  {
    name: "Matt",
    message: "I love pizza!"
  },
  {
    name: "John",
    message: "Nursing!"
  },
  {
    name: "Mary",
    message: "We are having a baby!"
  },
  {
    name: "Greg",
    message: "Got to love living in Georgia!"
  },
  {
    name: "Chris",
    message: "Help me!"
  }
];

fs.writeFile(dataPath, JSON.stringify(newLines), (err) => {
    if (err) throw err;
    console.log('Got it!')})

fs.readFile('chirps.json', (err, data) => {
    if (err) throw err;
    let readThings = JSON.parse(data);
    console.log(readThings);});