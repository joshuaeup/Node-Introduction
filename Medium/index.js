"use script";

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
