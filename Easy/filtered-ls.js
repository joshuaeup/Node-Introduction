"use strict";

const fs = require("fs");
const path = require("path");

const func = (dir, ext) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log("Error: " + err);
        }

        // Loop through array then return files that patch extension
        for (let file of files) {
            if (path.extname(file) === `.${ext}`) {
                console.log(file);
            }
        }
    });
};

func(process.argv[2], process.argv[3]);

// ("use strict");
// const fs = require("fs");
// const path = require("path");

// const folder = process.argv[2];
// const ext = "." + process.argv[3];

// fs.readdir(folder, function (err, files) {
//     if (err) return console.error(err);
//     files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//             console.log(file);
//         }
//     });
// });
