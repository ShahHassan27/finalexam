const fs = require("fs");

/*fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

fs.writeFile("./docs/blog2.txt", "Hey!, I am so excited", () => {
  console.log("file is written");
});

if (!fs.existsSync("./docs/downloads")) {
  fs.mkdir("./docs/downloads", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created at", __dirname);
  });
} else {
  fs.rmdir("./docs/downloads", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder removed");
  });
}
*/

if (fs.existsSync("./docs/del.txt")) {
  fs.unlink("./docs/del.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file is removed");
  });
}
