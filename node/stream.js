const fs = require("fs");

const rs = fs.createReadStream("./docs/blog3.txt", { encoding: "utf-8" });
const ws = fs.createWriteStream("./docs/blog4.txt");

/*     ***A short Hand pipe function can do the same job   *** exppore duplex stream
rs.on("data", (chunk) => {
  console.log("---New chunk---");
  console.log(chunk);
  ws.write("\n-----------------New Chunk-------------\n");
  ws.write(chunk);
});

*/

rs.pipe(ws);
