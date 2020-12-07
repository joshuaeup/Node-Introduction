"use script";
// JSON METHOD
const data = require("./planets.json");

data.planets.forEach((key) => {
    console.log(key.planet);
});

// FS METHOD
const fs = require("fs");

// receive file contents
fs.readFile("./planets.txt", (err, res) => {
    if (err) {
        console.log("Error: " + err);
    }

    // Split string by separation
    const arr = res.toString().split(", ");

    // log result
    console.log(arr);
});
