const fs = require("fs");

// Write operation
fs.writeFileSync("student.txt", "Name: Sakshi\nCourse: Computer Science");

// Read operation
const data = fs.readFileSync("student.txt", "utf8");

console.log("File Content:");
console.log(data);