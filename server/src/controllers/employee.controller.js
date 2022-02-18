const express = require("express");

const router = express.Router();
// const User = require("../models/user.model");

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body).lean().exec();

    return res.status(200).json(user);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ status: "Failed", message: error });
  }
});

module.exports = router;
