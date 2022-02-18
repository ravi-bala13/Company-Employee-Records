const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Employer = mongoose.model("employer", employerSchema);

module.exports = Employer;
