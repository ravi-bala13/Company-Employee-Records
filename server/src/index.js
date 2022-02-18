const express = require("express");

const app = express();

app.use(express.json());
const EmployerController = require("./controllers/employer.controller");
const EmployeeController = require("./controllers/employee.controller");

app.use("/employer", EmployerController);
app.use("/employee", EmployeeController);

module.exports = app;
