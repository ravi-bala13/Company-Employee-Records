const express = require("express");

const router = express.Router();
// const Employee = require("../models/employee.model");
const Employee = require("../models/employee.model");

router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    return res.status(200).json(employee);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ status: "Failed", message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const employee = await Employee.find().lean().exec();

    return res.status(200).json(employee);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ status: "Failed", message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).lean().exec();

    return res.status(200).json(employee);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ status: "Failed", message: error });
  }
});

module.exports = router;
