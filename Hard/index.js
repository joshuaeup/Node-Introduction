// END POINTS
// /employees - ALL EMPLOYEES
// /employees/:id - DIRECT EMPLOYEE

// Express Module
const express = require("express");

// Express Object
const app = express();

// Access data within .json file
const data = require("./employees.json");

// Port number will be 3000 unless otherwise specified
const port = process.env.PORT || 3000; // 8080 is max port available for server

app.get("/employees", (req, res) => {
    // Conditional to check if there is data. if not send not found status code and message
    if (!data) {
        res.statusCode(404).send("Could not find information");
    }

    res.send(data);
});

// :id is a param
app.get("/employees/:id", (req, res) => {
    // Function to loop through JSON data then return if both are equal
    const findEmployee = data.employees.find((employee) => {
        // Must parse string from req and convert to number in order to run conditional
        return parseInt(req.params.id) === employee.employeeID;
    });

    // Conditional to check if there is data. if not send not found status code and message
    if (!findEmployee) {
        res.status(404).send("Could not find information");
    }

    res.send(findEmployee);
});

// Run listening function and pass console log once it compiles
app.listen(port, () => {
    console.log(`Server listening at http//localhost:${port}`);
});
