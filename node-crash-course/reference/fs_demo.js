const fs = require("fs");
const path = require("path");
const os = require("os");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("Folder Created");
// });

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello Saleh",
  (err) => {
    if (err) throw err;
    console.log("File written to");
  }
);

console.log(os.platform());

// CPU Arch
console.log(os.arch());
