const fs = require("fs");

// Write Stream
const writeStream = fs.createWriteStream("example.txt");

writeStream.write("Hello, Node.js!\n");
writeStream.write("This is a write stream example.\n");
writeStream.end();

writeStream.on("finish", () => {
  console.log("File written successfully.");

  // Read Stream
  const readStream = fs.createReadStream("example.txt", "utf8");

  readStream.on("data", (chunk) => {
    console.log("File content:");
    console.log(chunk);
  });

  readStream.on("end", () => {
    console.log("File reading completed.");
  });
});