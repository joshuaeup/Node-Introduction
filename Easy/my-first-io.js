const fs = require("fs");

// Read file passed into the cli and receive buffer
const fileBuffer = fs.readFileSync(process.argv[2]);

// convert buffer to string
const str = fileBuffer.toString();

// Split string at each new line
const arr = str.split("\n");

// return the length of the array then subtract 1
const lines = arr.length - 1;

console.log(lines);
