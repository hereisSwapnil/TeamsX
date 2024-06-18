const express = require("express");
const {
  getEmployees,
  getEmployeeByID,
} = require("../controllers/employee.controller");

const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getEmployeeByID);

module.exports = router;
