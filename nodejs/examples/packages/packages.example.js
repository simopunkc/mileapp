const fs = require("fs");
const path = require("path");

const dataSinglePackages = JSON.parse(fs.readFileSync(path.resolve(__dirname, './packages.example.json'), {
  encoding: 'utf8',
  flag: 'r',
}));

module.exports = {
  dataSinglePackages,
}